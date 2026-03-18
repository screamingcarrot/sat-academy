import { useState, useCallback } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight as ChevronRightIcon, BookOpen, Zap, ExternalLink } from 'lucide-react'
import ThemeToggle   from '../components/ThemeToggle'
import DesmosEmbed   from '../components/DesmosEmbed'
import PracticeTab   from './PracticeTab'
import { getItemById } from '../data/curriculum'
import { getProgress } from '../utils/storage'

// ── Learn Tab ─────────────────────────────────────────────────────────────────
function LearnTab({ item, subunit, onGoToPractice }) {
  const [panel, setPanel]     = useState('steps') // 'steps' | 'desmos'
  const [stepIdx, setStepIdx] = useState(0)

  const learn        = item.learn
  const steps        = learn?.steps || []
  const dSteps       = learn?.desmosSteps || []
  const currentStep  = steps[stepIdx]
  const currentDStep = dSteps[Math.min(stepIdx, dSteps.length - 1)]

  const goPrev = useCallback(() => setStepIdx(i => Math.max(0, i - 1)), [])
  const goNext = useCallback(() => setStepIdx(i => Math.min(steps.length - 1, i + 1)), [steps.length])

  if (!learn) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-3">🚧</p>
        <p className="text-gray-500 dark:text-gray-400">Lesson content coming soon.</p>
        <button onClick={onGoToPractice} className="btn-primary mt-4">Jump to Practice</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">

      {/* ── Combined example + steps card ── (b, e) */}
      <div className="card rounded-2xl shadow-card overflow-hidden">
        {/* Example problem at top */}
        <div className="p-5 bg-brand-50/60 dark:bg-brand-950/20 border-b border-brand-100 dark:border-brand-900">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-2">Example Problem</p>
          <p className="text-lg font-mono font-semibold text-gray-900 dark:text-white leading-snug">
            {learn.exampleProblem}
          </p>
        </div>

        {/* Toggle: Steps vs Desmos */}
        <div className="flex border-b border-gray-100 dark:border-gray-800">
          {[
            { key: 'steps', label: 'Step-by-Step', icon: <BookOpen size={13} /> },
            { key: 'desmos', label: 'Graph', icon: <span className="font-mono text-xs font-bold">f(x)</span> },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setPanel(t.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors ${
                panel === t.key
                  ? 'text-brand-600 dark:text-brand-400 border-b-2 border-brand-500'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Steps panel */}
        {panel === 'steps' && steps.length > 0 && currentStep && (
          <div className="p-5 animate-fade-in">
            {/* Step header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">
                Step {currentStep.stepNum} of {steps.length}
              </span>
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStepIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      i === stepIdx ? 'bg-brand-500 w-6' : i < stepIdx ? 'bg-brand-300 w-4' : 'bg-gray-200 dark:bg-gray-700 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action */}
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">{currentStep.action}</p>

            {/* Equation */}
            <div className="bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 rounded-xl p-4 font-mono text-base text-center text-brand-800 dark:text-brand-200 mb-3">
              {currentStep.equation || currentStep.result}
            </div>

            {/* Result if different */}
            {currentStep.result && currentStep.equation !== currentStep.result && (
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-3 font-mono text-base text-center text-green-800 dark:text-green-200 mb-3">
                → {currentStep.result}
              </div>
            )}

            {/* Note */}
            {currentStep.note && (
              <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-2 border-brand-300 dark:border-brand-700 pl-3 mb-4">
                {currentStep.note}
              </p>
            )}

            {/* Nav */}
            <div className="flex gap-2">
              <button onClick={goPrev} disabled={stepIdx === 0} className="btn-secondary flex-1 flex items-center justify-center gap-1 py-2">
                <ChevronLeft size={15} /> Previous
              </button>
              <button onClick={goNext} disabled={stepIdx === steps.length - 1} className="btn-primary flex-1 flex items-center justify-center gap-1 py-2">
                Next <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Desmos panel — fully interactive (#6c), with expression list (#6d) */}
        {panel === 'desmos' && (
          <div className="animate-fade-in">
            {/* Expression list — shows what's entered (#6d) */}
            {currentDStep?.exprs?.length > 0 && (
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                {currentDStep.exprs.map((expr, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-lg"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: expr.color || '#6366f1' }}
                    />
                    {expr.latex}
                  </span>
                ))}
              </div>
            )}

            {/* Graph — fully interactive, no readOnly (#6c) */}
            <DesmosEmbed
              expressions={currentDStep?.exprs || []}
              className="w-full rounded-b-2xl"
              style={{ height: 340 }}
            />

            {/* Caption */}
            {currentDStep?.caption && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center px-5 py-3">
                {currentDStep.caption}
              </p>
            )}

            {/* Step nav for graph */}
            {dSteps.length > 1 && (
              <div className="flex gap-2 px-4 pb-4">
                <button onClick={goPrev} disabled={stepIdx === 0} className="btn-secondary flex-1 flex items-center justify-center gap-1 py-2">
                  <ChevronLeft size={15} /> Previous
                </button>
                <button onClick={goNext} disabled={stepIdx >= dSteps.length - 1} className="btn-primary flex-1 flex items-center justify-center gap-1 py-2">
                  Next <ChevronRight size={15} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Khan Academy link */}
      {subunit.khanLink && (
        <a
          href={subunit.khanLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-brand-500 dark:hover:text-brand-400 transition-colors self-start"
        >
          <ExternalLink size={12} />
          Khan Academy video for this topic
        </a>
      )}

      {/* CTA */}
      <button onClick={onGoToPractice} className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-base">
        <Zap size={16} />
        I'm Ready — Go to Practice →
      </button>
    </div>
  )
}

// ── Main LearnScreen ──────────────────────────────────────────────────────────
export default function LearnScreen() {
  const { itemId }       = useParams()
  const [searchParams]   = useSearchParams()
  const navigate         = useNavigate()

  const found = getItemById(itemId)
  const hasLearn = Boolean(found?.item?.learn)

  const [tab, setTab] = useState(
    searchParams.get('tab') === 'practice' || !hasLearn ? 'practice' : 'learn'
  )

  if (!found) return <div className="p-8 text-center text-gray-400">Item not found.</div>

  const { item, subunit, unit } = found
  const progress  = getProgress()
  const allItems  = subunit.items || []
  const itemIndex = allItems.findIndex(i => i.id === itemId)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 page-enter flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="h-14 flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="btn-ghost p-2 -ml-2">
              <ArrowLeft size={18} />
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 min-w-0 flex-1">
              <span className="hidden sm:block truncate">{unit.title}</span>
              <ChevronRight size={14} className="hidden sm:block flex-shrink-0" />
              <span className="truncate">{subunit.title}</span>
              <ChevronRight size={14} className="flex-shrink-0" />
              <span className="font-semibold text-gray-900 dark:text-white">{item.id}</span>
            </div>

            <ThemeToggle />
          </div>

          {/* Progress dots row */}
          <div className="flex items-center gap-1.5 pb-3 overflow-x-auto">
            {allItems.map((it, idx) => (
              <button
                key={it.id}
                onClick={() => navigate(`/learn/${it.id}${tab === 'practice' ? '?tab=practice' : ''}`)}
                title={it.title}
                className={`h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                  progress[it.id]?.completed ? 'bg-green-500 w-5' :
                  it.id === itemId           ? 'bg-sat-gold w-6'  :
                                              'bg-gray-300 dark:bg-gray-600 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Tab bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-[89px] z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex">
          {[
            { key: 'learn',    label: 'Learn',    icon: <BookOpen size={15} /> },
            { key: 'practice', label: 'Practice', icon: <Zap size={15} /> },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                tab === t.key
                  ? 'border-brand-500 text-brand-600 dark:text-brand-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {tab === 'learn' ? (
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 py-8">
          {/* Title + description side by side (#6a) */}
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-shrink-0">
              <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-0.5">{item.id}</p>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">{item.title}</h1>
            </div>
            {item.learn?.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-5 border-l border-gray-200 dark:border-gray-700 pl-4 hidden sm:block">
                {item.learn.description}
              </p>
            )}
          </div>
          {item.learn?.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 sm:hidden">
              {item.learn.description}
            </p>
          )}
          <LearnTab item={item} subunit={subunit} onGoToPractice={() => setTab('practice')} />
        </main>
      ) : (
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 py-6">
          <PracticeTab item={item} subunit={subunit} onBack={() => setTab('learn')} />
        </main>
      )}
    </div>
  )
}

function ChevronRight({ size, className }) {
  return <ChevronRightIcon size={size} className={className} />
}
