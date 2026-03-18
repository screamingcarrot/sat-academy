import { Check, X } from 'lucide-react'

// Normalise a choice that may be either:
//   object format  { label: 'A', value: 'some text' }   (unit 2 / generators)
//   string format  'A) some text'                        (units 1/3/4 static files)
function normalise(raw) {
  if (typeof raw === 'string') {
    // 'A) some text' → { label: 'A', value: 'some text' }
    const parenIdx = raw.indexOf(')')
    return parenIdx > 0
      ? { label: raw.slice(0, parenIdx).trim(), value: raw.slice(parenIdx + 1).trim() }
      : { label: raw, value: raw }
  }
  return raw
}

export default function MCQBubbles({ choices = [], selected, correct, submitted, onSelect, confirmMode = false, pendingChoice, onPendingSelect }) {
  // In confirmMode the parent controls pendingChoice/onPendingSelect; otherwise we use onSelect directly.
  const handleClick = (label) => {
    if (submitted) return
    if (confirmMode) onPendingSelect?.(label)
    else onSelect(label)
  }

  // Normalise correct answer too (may be 'A) text' or just 'A')
  const correctLabel = (() => {
    if (!correct) return correct
    const p = correct.indexOf(')')
    return p > 0 ? correct.slice(0, p).trim() : correct
  })()

  return (
    <div className="flex flex-col gap-2">
      {choices.map((raw) => {
        const choice     = normalise(raw)
        const isPending  = confirmMode && pendingChoice === choice.label
        const isSelected = !confirmMode && selected === choice.label
        const isCorrect  = submitted && choice.label === correctLabel
        const isWrong    = submitted && (confirmMode ? selected : isSelected) && choice.label !== correctLabel
        const isWrongFinal = submitted && choice.label === correctLabel ? false : submitted && selected === choice.label && choice.label !== correctLabel

        return (
          <button
            key={choice.label}
            disabled={submitted}
            onClick={() => handleClick(choice.label)}
            className={`mcq-bubble text-left ${
              isCorrect    ? 'correct'  :
              isWrongFinal ? 'wrong'    :
              isPending    ? 'selected' :
              isSelected   ? 'selected' : ''
            } ${submitted ? 'cursor-default' : ''}`}
          >
            <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors
              ${isCorrect    ? 'border-green-500 bg-green-500 text-white' :
                isWrongFinal ? 'border-red-500 bg-red-500 text-white'    :
                isPending    ? 'border-brand-500 bg-brand-500 text-white':
                isSelected   ? 'border-brand-500 bg-brand-500 text-white':
                               'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'}`}>
              {isCorrect    ? <Check size={14} /> :
               isWrongFinal ? <X size={14} />     :
               choice.label}
            </span>
            <span className={`text-sm leading-snug ${
              isCorrect    ? 'text-green-800 dark:text-green-300 font-medium' :
              isWrongFinal ? 'text-red-800 dark:text-red-300'                :
              isPending    ? 'text-brand-800 dark:text-brand-200 font-medium':
              isSelected   ? 'text-brand-800 dark:text-brand-200 font-medium':
                             'text-gray-700 dark:text-gray-200'}`}>
              {choice.value}
            </span>
          </button>
        )
      })}
    </div>
  )
}
