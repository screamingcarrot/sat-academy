import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, BookOpen, RotateCcw, Home, FileText, GripVertical, Flag, ArrowRight } from 'lucide-react'
import DesmosEmbed        from '../components/DesmosEmbed'
import MCQBubbles         from '../components/MCQBubbles'
import FreeResponseInput  from '../components/FreeResponseInput'
import FormulaSheet       from '../components/FormulaSheet'
import QuestionVisual     from '../components/QuestionVisual'
import { getQuestions }   from '../data/mathQuestions'
import { getNextItem }    from '../data/curriculum'
import { getSettings, updateAccuracy, markSubunitComplete, getFlagged, toggleFlagged } from '../utils/storage'

// Normalise answer key: strip 'A) text' → 'A', leave 'A' as-is, leave free strings untouched
function normalizeAnswer(answer) {
  if (!answer) return answer
  const s = String(answer)
  return s.length > 1 && s[1] === ')' ? s[0] : s
}

// ── Explanation panel ─────────────────────────────────────────────────────────
function ExplanationPanel({ question, wasCorrect }) {
  const exp = question.explanation
  if (!exp) return null
  return (
    <div className={`mt-4 rounded-xl border-2 p-4 ${wasCorrect
      ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/20'
      : 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-950/20'}`}
    >
      <p className={`text-sm font-bold mb-3 ${wasCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
        {wasCorrect ? '✓ Correct!' : '✗ Incorrect — here\'s how to solve it:'}
      </p>
      {exp.problem && (
        <p className="text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 mb-3 bg-white/60 dark:bg-black/20 rounded-lg px-3 py-2">
          {exp.problem}
        </p>
      )}
      {exp.steps?.map((s, i) => (
        <div key={i} className="flex gap-2 text-sm mb-2 last:mb-0">
          <span className="text-gray-400 dark:text-gray-500 flex-shrink-0 font-mono text-xs mt-0.5 w-4">{i + 1}.</span>
          <div>
            <span className="text-gray-500 dark:text-gray-400">{s.action}: </span>
            <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">{s.result}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Score summary ─────────────────────────────────────────────────────────────
function ScoreSummary({ score, total, results, onRetry, onBack, onHome, nextItem, onNext }) {
  const pct   = Math.round((score / total) * 100)
  const emoji = pct === 100 ? '🎉' : pct >= 60 ? '👍' : '📚'
  const msg   = pct === 100 ? 'Perfect score!' : pct >= 60 ? 'Good work! Keep it up.' : 'Keep studying — you\'ll get there!'

  return (
    <div className="flex flex-col items-center text-center gap-6 py-10 max-w-sm mx-auto animate-slide-up">
      <div className="text-6xl">{emoji}</div>
      <div>
        <p className="text-5xl font-bold text-gray-900 dark:text-white">{score}<span className="text-2xl text-gray-400 font-normal">/{total}</span></p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{msg}</p>
        <p className="text-3xl font-bold text-brand-600 dark:text-brand-400 mt-1">{pct}%</p>
      </div>

      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base ${
            results[i] ? 'bg-green-500 text-white' : 'bg-red-200 dark:bg-red-900/40 text-red-500 dark:text-red-400'
          }`}>
            {results[i] ? '✓' : '✗'}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 w-full">
        {/* Next section CTA — highest priority */}
        {nextItem && (
          <button
            onClick={onNext}
            className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-base"
          >
            <ArrowRight size={16} />
            Next: {nextItem.id} — {nextItem.title}
          </button>
        )}
        <button onClick={onRetry} className="btn-secondary w-full flex items-center justify-center gap-2 py-3">
          <RotateCcw size={16} /> Practice Again
        </button>
        <button onClick={onBack} className="btn-ghost w-full flex items-center justify-center gap-2 py-2">
          <BookOpen size={14} /> Back to Lesson
        </button>
        <button onClick={onHome} className="btn-ghost w-full flex items-center justify-center gap-2">
          <Home size={14} /> Dashboard
        </button>
      </div>
    </div>
  )
}

// ── Main PracticeTab ──────────────────────────────────────────────────────────
export default function PracticeTab({ item, subunit, onBack }) {
  const navigate = useNavigate()
  const [session,      setSession]      = useState(0)
  const [qIndex,       setQIndex]       = useState(0)
  const [selected,     setSelected]     = useState(null)
  const [pendingChoice, setPendingChoice] = useState(null)
  const [submitted,    setSubmitted]    = useState(false)
  const [results,      setResults]      = useState([])
  const [done,         setDone]         = useState(false)
  const [showFormulas, setShowFormulas] = useState(false)
  const [flagged,      setFlagged]      = useState(() => getFlagged())

  // Resizable split (only shown when question has a graph expression)
  const [splitPct, setSplitPct] = useState(40)
  const dragging     = useRef(false)
  const containerRef = useRef(null)

  const questions = getQuestions(item.id, session)
  const settings  = getSettings()
  const nextItem  = getNextItem(item.id)

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    dragging.current = true
    const onMove = (ev) => {
      if (!dragging.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const pct  = ((ev.clientX - rect.left) / rect.width) * 100
      setSplitPct(Math.max(25, Math.min(60, pct)))
    }
    const onUp = () => {
      dragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [])

  if (!questions) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-16">
        <p className="text-5xl">🚧</p>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Practice questions coming soon.</p>
        <button onClick={onBack} className="btn-primary">Back to Lesson</button>
      </div>
    )
  }

  const q      = questions[qIndex]
  const totalQ = questions.length

  const useFree = (() => {
    if (settings.answerMode === 'free') return true
    if (settings.answerMode === 'mcq')  return false
    if (q.type === 'free') return true
    if (q.type === 'mcq')  return false
    return Math.random() * 100 > settings.mcqPercent
  })()

  const answerKey = normalizeAnswer(q.answer)

  const recordResult = (correct) => {
    const newResults = [...results, correct]
    setResults(newResults)
    if (newResults.length >= totalQ) {
      const score = newResults.filter(Boolean).length
      updateAccuracy(item.id, score, totalQ)
      if (score === totalQ) markSubunitComplete(item.id, score, totalQ)
    }
    return newResults
  }

  const handleSubmitMCQ = (label) => {
    if (submitted) return
    setSelected(label)
    setPendingChoice(null)
    setSubmitted(true)
    recordResult(label === answerKey)
  }

  const handleSubmitFree = (val) => {
    if (submitted) return
    setSelected(val)
    setSubmitted(true)
    recordResult(val.trim() === String(q.answer).trim())
  }

  const handleNext = () => {
    if (qIndex + 1 >= totalQ) {
      setDone(true)
    } else {
      setQIndex(i => i + 1)
      setSelected(null)
      setPendingChoice(null)
      setSubmitted(false)
    }
  }

  const handleRetry = () => {
    setSession(s => s + 1)
    setQIndex(0)
    setSelected(null)
    setPendingChoice(null)
    setSubmitted(false)
    setResults([])
    setDone(false)
  }

  const handleFlag = () => {
    toggleFlagged(q.id)
    setFlagged(getFlagged())
  }

  const handleGoNext = () => {
    navigate(`/learn/${nextItem.id}?tab=practice`)
  }

  if (done) {
    return (
      <ScoreSummary
        score={results.filter(Boolean).length}
        total={totalQ}
        results={results}
        onRetry={handleRetry}
        onBack={onBack}
        onHome={() => navigate('/')}
        nextItem={nextItem}
        onNext={handleGoNext}
      />
    )
  }

  const isFlagged  = flagged.has(q.id)
  const wasCorrect = submitted && (useFree
    ? selected?.trim() === String(q.answer).trim()
    : selected === answerKey
  )
  const hasGraph = Boolean(q.desmosExpression)
  const confirmMode = !useFree && Boolean(settings.confirmAnswer)

  return (
    <>
      {showFormulas && <FormulaSheet onClose={() => setShowFormulas(false)} />}

      <div className="max-w-5xl mx-auto w-full flex flex-col gap-4">
        {/* ── Top bar ── */}
        <div className="flex items-center gap-3 px-1">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tabular-nums flex-shrink-0">
            Question {qIndex + 1} of {totalQ}
          </span>

          {/* Progress pips */}
          <div className="flex items-center gap-1.5 flex-1">
            {questions.map((_, i) => (
              <div key={i} className={`h-2 rounded-full flex-1 transition-all duration-300 ${
                i < results.length
                  ? results[i] ? 'bg-green-500' : 'bg-red-400'
                  : i === qIndex ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'
              }`} />
            ))}
          </div>

          <button
            onClick={handleFlag}
            title={isFlagged ? 'Remove flag' : 'Flag for review'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex-shrink-0 ${
              isFlagged
                ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-700'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-500 border border-transparent'
            }`}
          >
            <Flag size={13} className={isFlagged ? 'fill-current' : ''} />
            {isFlagged ? 'Flagged' : 'Flag'}
          </button>

          <button
            onClick={() => setShowFormulas(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0 border border-transparent"
          >
            <FileText size={13} /> Formulas
          </button>
        </div>

        {/* ── Question card ── */}
        <div className="card rounded-2xl shadow-card overflow-hidden">
          {hasGraph ? (
            /* Split layout when there's a Desmos graph */
            <div
              ref={containerRef}
              className="flex"
              style={{ height: 440, minHeight: 380 }}
            >
              {/* Left: Desmos */}
              <div className="flex-shrink-0 flex flex-col border-r border-gray-100 dark:border-gray-800" style={{ width: `${splitPct}%`, minWidth: 220 }}>
                <DesmosEmbed
                  expressions={[{ id: 'q', latex: q.desmosExpression, color: '#6366f1' }]}
                  className="w-full flex-1"
                  style={{ height: '100%' }}
                />
              </div>

              {/* Drag handle */}
              <div
                className="divider-handle flex items-center justify-center select-none w-3 bg-gray-50 dark:bg-gray-800/50"
                onMouseDown={handleMouseDown}
                style={{ cursor: 'col-resize' }}
              >
                <GripVertical size={14} className="text-gray-400" />
              </div>

              {/* Right: Question */}
              <div className="flex-1 overflow-y-auto p-6 min-w-0 flex flex-col">
                <QuestionContent
                  q={q}
                  useFree={useFree}
                  submitted={submitted}
                  selected={selected}
                  pendingChoice={pendingChoice}
                  setPendingChoice={setPendingChoice}
                  answerKey={answerKey}
                  wasCorrect={wasCorrect}
                  confirmMode={confirmMode}
                  onSubmitMCQ={handleSubmitMCQ}
                  onSubmitFree={handleSubmitFree}
                  onNext={handleNext}
                  qIndex={qIndex}
                  totalQ={totalQ}
                />
              </div>
            </div>
          ) : (
            /* Full-width layout when no graph */
            <div className="p-6 sm:p-8 flex flex-col">
              <QuestionContent
                q={q}
                useFree={useFree}
                submitted={submitted}
                selected={selected}
                pendingChoice={pendingChoice}
                setPendingChoice={setPendingChoice}
                answerKey={answerKey}
                wasCorrect={wasCorrect}
                confirmMode={confirmMode}
                onSubmitMCQ={handleSubmitMCQ}
                onSubmitFree={handleSubmitFree}
                onNext={handleNext}
                qIndex={qIndex}
                totalQ={totalQ}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ── Question content (shared between split and full-width layouts) ─────────────
function QuestionContent({
  q, useFree, submitted, selected, pendingChoice, setPendingChoice,
  answerKey, wasCorrect, confirmMode,
  onSubmitMCQ, onSubmitFree, onNext, qIndex, totalQ,
}) {
  return (
    <>
      <p className="text-base font-medium text-gray-900 dark:text-white leading-relaxed mb-4">
        {q.question}
      </p>

      {/* SVG diagram if present */}
      {q.visual && <QuestionVisual visual={q.visual} />}

      {!useFree ? (
        <>
          <MCQBubbles
            choices={q.choices || []}
            selected={selected}
            correct={answerKey}
            submitted={submitted}
            onSelect={onSubmitMCQ}
            confirmMode={confirmMode}
            pendingChoice={pendingChoice}
            onPendingSelect={setPendingChoice}
          />
          {/* Confirm button (only in confirmMode, before submitting, after selecting) */}
          {confirmMode && !submitted && pendingChoice && (
            <button
              onClick={() => onSubmitMCQ(pendingChoice)}
              className="mt-3 btn-primary w-full py-2.5 text-sm font-semibold"
            >
              Check Answer
            </button>
          )}
        </>
      ) : (
        <FreeResponseInput
          correct={q.answer}
          submitted={submitted}
          onSubmit={onSubmitFree}
        />
      )}

      {submitted && <ExplanationPanel question={q} wasCorrect={wasCorrect} />}

      {submitted && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <button
            onClick={onNext}
            className="btn-primary flex items-center gap-2 py-2.5 px-5"
          >
            {qIndex + 1 >= totalQ ? 'See Results' : 'Next Question'}
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </>
  )
}
