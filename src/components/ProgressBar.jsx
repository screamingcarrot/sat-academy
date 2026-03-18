export default function ProgressBar({ value = 0, max = 100, className = '', showLabel = false, size = 'md' }) {
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))
  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span className="font-semibold text-brand-600 dark:text-brand-400">{pct}%</span>
        </div>
      )}
      <div className={`progress-track ${heights[size]}`}>
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
