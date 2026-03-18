import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

// ── Inline SVG illustrations ──────────────────────────────────────────────
const INK  = '#6366f1'
const INK2 = '#818cf8'
const FILL = '#eef2ff'
const GRAY = '#9ca3af'
const TXT  = '#374151'

function RightAngle({ x, y, s = 10 }) {
  return <path d={`M${x - s},${y} L${x - s},${y - s} L${x},${y - s}`} fill="none" stroke={INK} strokeWidth="1.5" />
}

function ShapeCircle() {
  return (
    <svg viewBox="0 0 90 90" width="80" height="80">
      <circle cx="45" cy="45" r="32" fill={FILL} stroke={INK} strokeWidth="2" />
      <line x1="45" y1="45" x2="77" y2="45" stroke={INK} strokeWidth="1.5" />
      <circle cx="45" cy="45" r="2.5" fill={INK} />
      <text x="61" y="40" fontSize="10" fill={INK} fontWeight="600">r</text>
    </svg>
  )
}

function ShapeRect() {
  return (
    <svg viewBox="0 0 100 70" width="90" height="64">
      <rect x="8" y="10" width="84" height="50" fill={FILL} stroke={INK} strokeWidth="2" rx="1" />
      <text x="50" y="64" textAnchor="middle" fontSize="10" fill={TXT} fontWeight="600">l</text>
      <text x="3" y="37" textAnchor="middle" fontSize="10" fill={TXT} fontWeight="600">w</text>
    </svg>
  )
}

function ShapeTriangle() {
  return (
    <svg viewBox="0 0 100 80" width="90" height="72">
      <polygon points="50,8 8,72 92,72" fill={FILL} stroke={INK} strokeWidth="2" />
      <line x1="50" y1="8" x2="50" y2="72" stroke={INK2} strokeWidth="1.5" strokeDasharray="3,3" />
      <RightAngle x={50} y={72} s={8} />
      <text x="50" y="81" textAnchor="middle" fontSize="10" fill={TXT} fontWeight="600">b</text>
      <text x="56" y="44" fontSize="10" fill={INK} fontWeight="600">h</text>
    </svg>
  )
}

function ShapeCylinder() {
  return (
    <svg viewBox="0 0 80 100" width="70" height="88">
      <ellipse cx="40" cy="20" rx="28" ry="10" fill="#ddd6fe" stroke={INK} strokeWidth="2" />
      <rect x="12" y="20" width="56" height="60" fill={FILL} stroke={INK} strokeWidth="2" />
      <ellipse cx="40" cy="80" rx="28" ry="10" fill={FILL} stroke={INK} strokeWidth="2" />
      <line x1="40" y1="20" x2="68" y2="20" stroke={INK} strokeWidth="1.5" />
      <text x="54" y="17" fontSize="10" fill={INK} fontWeight="600">r</text>
      <line x1="70" y1="20" x2="70" y2="80" stroke={INK2} strokeWidth="1.5" strokeDasharray="3,3" />
      <text x="74" y="53" fontSize="10" fill={TXT} fontWeight="600">h</text>
    </svg>
  )
}

function ShapeCone() {
  return (
    <svg viewBox="0 0 80 100" width="70" height="88">
      <ellipse cx="40" cy="80" rx="30" ry="10" fill={FILL} stroke={INK} strokeWidth="2" />
      <line x1="40" y1="10" x2="10" y2="80" stroke={INK} strokeWidth="2" />
      <line x1="40" y1="10" x2="70" y2="80" stroke={INK} strokeWidth="2" />
      <line x1="40" y1="80" x2="70" y2="80" stroke={INK} strokeWidth="1.5" />
      <text x="55" y="76" fontSize="10" fill={INK} fontWeight="600">r</text>
      <line x1="38" y1="10" x2="38" y2="80" stroke={INK2} strokeWidth="1.5" strokeDasharray="3,3" />
      <text x="24" y="48" fontSize="10" fill={TXT} fontWeight="600">h</text>
    </svg>
  )
}

function ShapeSphere() {
  return (
    <svg viewBox="0 0 80 80" width="72" height="72">
      <circle cx="40" cy="40" r="30" fill={FILL} stroke={INK} strokeWidth="2" />
      <ellipse cx="40" cy="40" rx="30" ry="10" fill="none" stroke={INK2} strokeWidth="1.5" strokeDasharray="3,3" />
      <line x1="40" y1="40" x2="70" y2="40" stroke={INK} strokeWidth="1.5" />
      <text x="55" y="36" fontSize="10" fill={INK} fontWeight="600">r</text>
    </svg>
  )
}

function ShapeRightTriangle306090() {
  return (
    <svg viewBox="0 0 120 90" width="108" height="81">
      <polygon points="10,80 110,80 110,20" fill={FILL} stroke={INK} strokeWidth="2" />
      <RightAngle x={110} y={80} s={9} />
      <text x="20" y="72" fontSize="10" fill={TXT}>30°</text>
      <text x="96" y="30" fontSize="10" fill={TXT}>60°</text>
      <text x="55" y="93" textAnchor="middle" fontSize="10" fill={TXT} fontWeight="600">x√3</text>
      <text x="117" y="54" fontSize="10" fill={TXT} fontWeight="600">x</text>
      <text x="46" y="45" fontSize="10" fill={INK} fontWeight="700">2x</text>
    </svg>
  )
}

function ShapeRightTriangle454590() {
  return (
    <svg viewBox="0 0 110 90" width="99" height="81">
      <polygon points="10,80 100,80 100,10" fill={FILL} stroke={INK} strokeWidth="2" />
      <RightAngle x={100} y={80} s={9} />
      <text x="18" y="72" fontSize="10" fill={TXT}>45°</text>
      <text x="85" y="24" fontSize="10" fill={TXT}>45°</text>
      <text x="55" y="93" textAnchor="middle" fontSize="10" fill={TXT} fontWeight="600">x</text>
      <text x="106" y="50" fontSize="10" fill={TXT} fontWeight="600">x</text>
      <text x="40" y="40" fontSize="10" fill={INK} fontWeight="700">x√2</text>
    </svg>
  )
}

function ShapeArc() {
  const cx = 45, cy = 45, r = 32
  const rad = (90 * Math.PI) / 180
  return (
    <svg viewBox="0 0 90 90" width="80" height="80">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="3,3" />
      <path d={`M${cx},${cy} L${cx + r},${cy} A${r},${r} 0 0,1 ${cx},${cy - r} Z`}
        fill={FILL} stroke={INK} strokeWidth="2" />
      <text x="57" y="40" fontSize="10" fill={INK} fontWeight="600">θ</text>
      <text x="22" y="58" fontSize="9" fill={TXT}>Arc/Sector</text>
    </svg>
  )
}

// ── Collapsible section ───────────────────────────────────────────────────
function Section({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">{title}</span>
        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="p-4 space-y-3">{children}</div>}
    </div>
  )
}

function FormulaRow({ shape, label, formula, note }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-2.5">
      {shape && <div className="flex-shrink-0 flex items-center justify-center w-16">{shape}</div>}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</p>
        {note && <p className="text-xs text-gray-400 dark:text-gray-500">{note}</p>}
      </div>
      <code className="text-sm font-mono font-bold text-brand-600 dark:text-brand-400 flex-shrink-0">
        {formula}
      </code>
    </div>
  )
}

export default function FormulaSheet({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[88vh] overflow-y-auto border border-gray-200 dark:border-gray-800 animate-slide-up">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 rounded-t-2xl z-10">
          <div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white">SAT Formula Reference</h2>
            <p className="text-xs text-gray-400 mt-0.5">Same sheet provided on the real Digital SAT</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3">

          {/* Group 1 — Area & Perimeter */}
          <Section title="📐  Area & Perimeter" defaultOpen={true}>
            <FormulaRow shape={<ShapeCircle />}   label="Circle area"      formula="A = πr²" />
            <FormulaRow shape={<ShapeCircle />}   label="Circumference"    formula="C = 2πr"  note="or C = πd" />
            <FormulaRow shape={<ShapeRect />}     label="Rectangle"        formula="A = lw"   note="P = 2(l+w)" />
            <FormulaRow shape={<ShapeTriangle />} label="Triangle"         formula="A = ½bh" />
          </Section>

          {/* Group 2 — Volume */}
          <Section title="📦  Volume">
            <FormulaRow shape={<ShapeRect />}     label="Rectangular prism" formula="V = lwh" />
            <FormulaRow shape={<ShapeCylinder />} label="Cylinder"          formula="V = πr²h" />
            <FormulaRow shape={<ShapeSphere />}   label="Sphere"            formula="V = ⁴⁄₃πr³" />
            <FormulaRow shape={<ShapeCone />}     label="Cone"              formula="V = ⅓πr²h" />
            <FormulaRow shape={null}              label="Pyramid"           formula="V = ⅓lwh" />
          </Section>

          {/* Group 3 — Triangles, Arcs & Angles */}
          <Section title="📏  Triangles, Arcs & Angles">
            <FormulaRow shape={<ShapeRightTriangle306090 />} label="30-60-90 triangle"  formula="1 : √3 : 2"   note="short : long : hyp" />
            <FormulaRow shape={<ShapeRightTriangle454590 />} label="45-45-90 triangle"  formula="1 : 1 : √2"   note="leg : leg : hyp" />
            <FormulaRow shape={<ShapeRightTriangle306090 />} label="Pythagorean theorem" formula="a² + b² = c²" />
            <FormulaRow shape={<ShapeArc />}                 label="Arc length"         formula="(θ/360)·2πr" />
            <FormulaRow shape={<ShapeArc />}                 label="Sector area"        formula="(θ/360)·πr²" />
          </Section>

          {/* Key facts */}
          <div className="bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800 rounded-xl px-4 py-3 space-y-1">
            <p className="text-xs font-bold text-brand-700 dark:text-brand-300 mb-2">Key Facts</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">• A circle has <strong>360°</strong> and <strong>2π radians</strong></p>
            <p className="text-xs text-gray-600 dark:text-gray-400">• Triangle angles sum to <strong>180°</strong></p>
            <p className="text-xs text-gray-600 dark:text-gray-400">• sin(θ) = cos(90° − θ)  ←  complementary identity</p>
          </div>
        </div>
      </div>
    </div>
  )
}
