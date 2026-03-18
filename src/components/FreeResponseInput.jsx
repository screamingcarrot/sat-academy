import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function FreeResponseInput({ correct, submitted, onSubmit }) {
  const [value, setValue] = useState('')

  const isCorrect = submitted && value.trim() === String(correct).trim()
  const isWrong   = submitted && !isCorrect

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Type your answer in the box below.
      </p>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !submitted) onSubmit(value) }}
          disabled={submitted}
          placeholder="Your answer..."
          className={`input pr-10 text-base font-mono ${
            isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300' :
            isWrong   ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300' : ''
          }`}
        />
        {submitted && (
          <span className={`absolute right-3 top-1/2 -translate-y-1/2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? <Check size={18} /> : <X size={18} />}
          </span>
        )}
      </div>
      {!submitted && (
        <button
          onClick={() => onSubmit(value)}
          disabled={!value.trim()}
          className="btn-primary self-start"
        >
          Submit Answer
        </button>
      )}
      {submitted && isWrong && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Correct answer: <span className="font-mono font-semibold">{correct}</span>
        </p>
      )}
    </div>
  )
}
