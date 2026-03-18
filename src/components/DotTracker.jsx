export default function DotTracker({ items = [], progress = {}, currentId = null, onDotClick }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {items.map((item) => {
        const done    = progress[item.id]?.completed
        const current = item.id === currentId
        return (
          <button
            key={item.id}
            onClick={() => onDotClick?.(item)}
            title={item.title}
            className={`dot transition-all duration-200 hover:scale-125 ${
              done    ? 'dot-done'    :
              current ? 'dot-current' :
                        'dot-pending'
            }`}
          />
        )
      })}
    </div>
  )
}
