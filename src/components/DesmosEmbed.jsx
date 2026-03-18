import { useEffect, useRef, useState } from 'react'

/**
 * DesmosEmbed — wraps the Desmos Calculator API.
 * expressions: [{ id, latex, color?, showLabel? }]
 * readOnly: hides keypad/expression list
 */
export default function DesmosEmbed({
  expressions = [],
  readOnly = false,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null)
  const calcRef      = useRef(null)
  const [ready, setReady]   = useState(false)
  const [error, setError]   = useState(false)

  // Init calculator once
  useEffect(() => {
    if (!containerRef.current) return

    const tryInit = () => {
      if (typeof window.Desmos === 'undefined') return false
      try {
        calcRef.current = window.Desmos.GraphingCalculator(containerRef.current, {
          keypad:            !readOnly,
          expressionsCollapsed: readOnly,
          expressions:       !readOnly,
          settingsMenu:      false,
          zoomButtons:       !readOnly,
          lockViewport:      readOnly,
          border:            false,
        })
        setReady(true)
        return true
      } catch (e) {
        setError(true)
        return false
      }
    }

    if (!tryInit()) {
      // Poll for Desmos script to load
      const interval = setInterval(() => {
        if (tryInit()) clearInterval(interval)
      }, 200)
      const timeout = setTimeout(() => { clearInterval(interval); setError(true) }, 8000)
      return () => { clearInterval(interval); clearTimeout(timeout) }
    }

    return () => {
      calcRef.current?.destroy()
    }
  }, [readOnly])

  // Sync expressions whenever they change
  useEffect(() => {
    if (!ready || !calcRef.current) return
    calcRef.current.setBlank()
    expressions.forEach(expr => {
      calcRef.current.setExpression({
        id:    expr.id || String(Math.random()),
        latex: expr.latex,
        color: expr.color || '#6366f1',
        ...(expr.showLabel ? { showLabel: true } : {}),
      })
    })
  }, [ready, expressions])

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-400 ${className}`} style={style}>
        Graph unavailable
      </div>
    )
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`} style={style}>
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
          <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
