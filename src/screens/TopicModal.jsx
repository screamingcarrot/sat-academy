import { useEffect, useState } from 'react'
import { X, BookOpen, Zap, CheckCircle2, Circle, Trophy, ChevronRight, ChevronLeft } from 'lucide-react'

const DIFF_COLORS = {
  easy:   'badge-easy',
  medium: 'badge-medium',
  hard:   'badge-hard',
}

export default function TopicModal({ subunit, progress, onClose, onLearn, onPractice }) {
  const items = subunit.items || []
  const done  = items.filter(i => progress[i.id]?.completed).length
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (selectedItem) setSelectedItem(null)
        else onClose()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose, selectedItem])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/50 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="card rounded-2xl shadow-modal w-full max-w-lg animate-slide-up max-h-[90vh] flex flex-col">

        {/* ── Header ── */}
        <div className="flex items-start justify-between p-5 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 flex-1 min-w-0 pr-4">
            {selectedItem && (
              <button
                onClick={() => setSelectedItem(null)}
                className="btn-ghost p-1.5 -ml-1 flex-shrink-0"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  {selectedItem ? selectedItem.id : subunit.id}
                </span>
                <span className={`badge ${DIFF_COLORS[selectedItem ? selectedItem.difficulty : subunit.difficulty]}`}>
                  {selectedItem ? selectedItem.difficulty : subunit.difficulty}
                </span>
                {!selectedItem && done === items.length && items.length > 0 && (
                  <Trophy size={14} className="text-sat-gold fill-sat-gold" />
                )}
              </div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                {selectedItem ? selectedItem.title : subunit.title}
              </h2>
              {!selectedItem && items.length > 0 && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {done} of {items.length} completed
                </p>
              )}
            </div>
          </div>
          <button onClick={onClose} className="btn-ghost p-2 flex-shrink-0 -mr-1">
            <X size={18} />
          </button>
        </div>

        {/* ── Body ── */}
        {selectedItem ? (
          /* Sub-subunit detail — show Learn/Practice CTAs */
          <div className="flex-1 flex flex-col p-5 gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {selectedItem.learn?.description || 'Select an option below to begin studying this topic.'}
            </p>
            {progress[selectedItem.id]?.completed && (
              <div className="flex items-center gap-2 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2">
                <CheckCircle2 size={14} />
                Completed · {progress[selectedItem.id].accuracy}% accuracy
              </div>
            )}
            <div className="flex flex-col gap-2 mt-auto">
              <button
                onClick={() => onLearn(selectedItem.id)}
                className="w-full flex items-center justify-center gap-2 btn-primary py-3"
              >
                <BookOpen size={16} />
                Learn Concept First
              </button>
              <button
                onClick={() => onPractice(selectedItem.id)}
                className="w-full flex items-center justify-center gap-2 btn-secondary py-3"
              >
                <Zap size={16} />
                Jump Straight to Practice
              </button>
            </div>
          </div>
        ) : items.length > 0 ? (
          /* Subunit list */
          <div className="overflow-y-auto flex-1 p-3">
            {items.map(item => {
              const isComplete = progress[item.id]?.completed
              const accuracy   = progress[item.id]?.accuracy
              return (
                <button
                  key={item.id}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group text-left"
                  onClick={() => setSelectedItem(item)}
                >
                  {isComplete
                    ? <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    : <Circle size={18} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />
                  }
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-mono font-semibold text-gray-400 dark:text-gray-500">{item.id}</span>
                      <span className={`badge ${DIFF_COLORS[item.difficulty]}`}>{item.difficulty}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">{item.title}</p>
                  </div>
                  {isComplete && accuracy !== undefined && (
                    <span className={`text-xs font-semibold flex-shrink-0 ${
                      accuracy >= 80 ? 'text-green-600 dark:text-green-400' :
                      accuracy >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
                                       'text-red-600 dark:text-red-400'
                    }`}>
                      {accuracy}%
                    </span>
                  )}
                  <ChevronRight size={14} className="text-gray-300 dark:text-gray-600 flex-shrink-0 group-hover:text-gray-500 transition-colors" />
                </button>
              )
            })}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8 text-center">
            <div>
              <p className="text-4xl mb-2">🚧</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Content coming soon!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
