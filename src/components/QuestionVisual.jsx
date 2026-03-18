// QuestionVisual — renders geometric / statistical diagrams for practice questions.
// Usage: <QuestionVisual visual={q.visual} />
// visual = { type: 'right_triangle', a: 9, b: 12, c: 15 }

const INK  = '#6366f1'          // brand-500
const INK2 = '#818cf8'          // brand-400
const FILL = '#eef2ff'          // brand-50
const GRAY = '#9ca3af'          // gray-400
const TXT  = '#374151'          // gray-700
const TXT_DK = '#e5e7eb'        // gray-200 (dark mode — applied via SVG class trick not possible inline; we rely on a wrapper)

/* ── helpers ──────────────────────────────────────────────────────────────── */
function Label({ x, y, children, color = TXT, size = 13, bold = false }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle"
      fontSize={size} fontWeight={bold ? '700' : '500'} fill={color}>
      {children}
    </text>
  )
}

function RightAngle({ x, y, size = 10 }) {
  return (
    <path d={`M${x - size},${y} L${x - size},${y - size} L${x},${y - size}`}
      fill="none" stroke={INK} strokeWidth="1.5" />
  )
}

/* ── shape components ─────────────────────────────────────────────────────── */

function RightTriangle({ a, b, c }) {
  // right angle at bottom-right: (160,140) is the right angle vertex
  return (
    <svg viewBox="0 0 200 170" width="200" height="170">
      <polygon points="20,145 165,145 165,20"
        fill={FILL} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <RightAngle x={165} y={145} size={12} />
      {/* labels */}
      <Label x={92} y={162} color={TXT}>{a}</Label>
      <Label x={180} y={83} color={TXT}>{b}</Label>
      <Label x={80} y={72} color={INK} bold>{c} (hyp)</Label>
    </svg>
  )
}

function TriangleWithHeight({ base, height }) {
  // triangle with base and height line
  return (
    <svg viewBox="0 0 200 170" width="200" height="170">
      <polygon points="100,20 20,150 180,150"
        fill={FILL} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {/* height dashed line */}
      <line x1="100" y1="20" x2="100" y2="150"
        stroke={INK2} strokeWidth="1.5" strokeDasharray="4,3" />
      <RightAngle x={100} y={150} size={10} />
      {/* labels */}
      <Label x={100} y={163} color={TXT}>base = {base}</Label>
      <Label x={118} y={85} color={INK}>h = {height}</Label>
    </svg>
  )
}

function RectangleSVG({ w, h }) {
  // 160×90 display rectangle
  const rx = 20, ry = 30, rw = 160, rh = 90
  return (
    <svg viewBox="0 0 200 160" width="200" height="160">
      <rect x={rx} y={ry} width={rw} height={rh}
        fill={FILL} stroke={INK} strokeWidth="2.5" rx="2" />
      {/* labels */}
      <Label x={rx + rw / 2} y={ry + rh + 18} color={TXT}>width = {w}</Label>
      <Label x={rx - 18} y={ry + rh / 2} color={TXT}>{h}</Label>
      {/* height arrow cue */}
      <line x1={rx - 8} y1={ry} x2={rx - 8} y2={ry + rh}
        stroke={GRAY} strokeWidth="1" strokeDasharray="3,3" />
    </svg>
  )
}

function CircleSVG({ r, showDiameter = false }) {
  return (
    <svg viewBox="0 0 180 180" width="180" height="180">
      <circle cx="90" cy="90" r="65" fill={FILL} stroke={INK} strokeWidth="2.5" />
      {/* radius line */}
      <line x1="90" y1="90" x2="155" y2="90" stroke={INK} strokeWidth="2" />
      <circle cx="90" cy="90" r="3" fill={INK} />
      <Label x={122} y={78} color={INK} bold>r = {r}</Label>
      {showDiameter && <>
        <line x1="25" y1="90" x2="155" y2="90" stroke={INK2} strokeWidth="1.5" strokeDasharray="4,3" />
        <Label x={90} y={110} color={GRAY}>d = {r * 2}</Label>
      </>}
    </svg>
  )
}

function SectorSVG({ angle = 90, r = 5 }) {
  // renders a pie-slice sector
  const cx = 90, cy = 100, radius = 70
  const rad = (angle * Math.PI) / 180
  const x2 = cx + radius * Math.cos(-rad)
  const y2 = cy + radius * Math.sin(-rad)
  const largeArc = angle > 180 ? 1 : 0
  return (
    <svg viewBox="0 0 180 180" width="180" height="180">
      <circle cx={cx} cy={cy} r={radius} fill="#e0e7ff" stroke={INK2} strokeWidth="1.5" strokeDasharray="4,3" />
      <path d={`M${cx},${cy} L${cx + radius},${cy} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`}
        fill={FILL} stroke={INK} strokeWidth="2.5" />
      {/* radius label */}
      <line x1={cx} y1={cy} x2={cx + radius} y2={cy} stroke={INK} strokeWidth="1.5" />
      <Label x={cx + radius / 2} y={cy - 10} color={INK}>r = {r}</Label>
      {/* angle label */}
      <Label x={cx + 22} y={cy + 10} color={TXT} size={12}>{angle}°</Label>
    </svg>
  )
}

function Angle3060_90() {
  return (
    <svg viewBox="0 0 220 160" width="220" height="160">
      <polygon points="20,140 180,140 180,20"
        fill={FILL} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <RightAngle x={180} y={140} size={12} />
      {/* angle marks */}
      <text x="30" y="130" fontSize="12" fill={TXT}>30°</text>
      <text x="168" y="35" fontSize="12" fill={TXT}>60°</text>
      {/* side labels */}
      <Label x={100} y={157} color={TXT}>x√3</Label>
      <Label x={195} y={85} color={TXT}>x</Label>
      <Label x={86} y={74} color={INK} bold>2x (hyp)</Label>
    </svg>
  )
}

function Angle4545_90() {
  return (
    <svg viewBox="0 0 190 160" width="190" height="160">
      <polygon points="20,140 160,140 160,20"
        fill={FILL} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <RightAngle x={160} y={140} size={12} />
      <text x="28" y="128" fontSize="12" fill={TXT}>45°</text>
      <text x="145" y="35" fontSize="12" fill={TXT}>45°</text>
      <Label x={90} y={157} color={TXT}>x</Label>
      <Label x={173} y={83} color={TXT}>x</Label>
      <Label x={76} y={72} color={INK} bold>x√2</Label>
    </svg>
  )
}

function ParallelTransversal({ angle1 = 65, angle2 = 65 }) {
  return (
    <svg viewBox="0 0 220 160" width="220" height="160">
      {/* parallel lines */}
      <line x1="10" y1="50" x2="210" y2="50" stroke={GRAY} strokeWidth="2.5" />
      <line x1="10" y1="110" x2="210" y2="110" stroke={GRAY} strokeWidth="2.5" />
      {/* parallel arrows */}
      <text x="195" y="47" fontSize="10" fill={GRAY}>▶</text>
      <text x="195" y="107" fontSize="10" fill={GRAY}>▶</text>
      {/* transversal */}
      <line x1="60" y1="10" x2="150" y2="150" stroke={INK} strokeWidth="2.5" />
      {/* angle markers */}
      <path d="M72,50 A18,18 0 0,0 85,50" fill="none" stroke={INK2} strokeWidth="1.5" />
      <Label x={95} y={45} size={12} color={INK}>{angle1}°</Label>
      <path d="M112,110 A18,18 0 0,1 125,110" fill="none" stroke={INK2} strokeWidth="1.5" />
      <Label x={135} y={105} size={12} color={INK}>{angle2}°</Label>
      <Label x={50} y={115} size={11} color={TXT}>alternate interior</Label>
    </svg>
  )
}

function LShapeSVG({ w1 = 8, h1 = 3, w2 = 4, h2 = 5 }) {
  // L-shape made of two rectangles
  const scale = 14
  const totalH = (h1 + h2) * scale
  const W1 = w1 * scale, H1 = h1 * scale, W2 = w2 * scale, H2 = h2 * scale
  const ox = 20, oy = 20
  return (
    <svg viewBox={`0 0 ${W1 + 60} ${totalH + 50}`} width={W1 + 60} height={totalH + 50}>
      {/* bottom rectangle */}
      <rect x={ox} y={oy + H2} width={W1} height={H1}
        fill={FILL} stroke={INK} strokeWidth="2" />
      {/* top-left rectangle */}
      <rect x={ox} y={oy} width={W2} height={H2}
        fill="#ddd6fe" stroke={INK} strokeWidth="2" />
      {/* labels */}
      <Label x={ox + W1 / 2} y={oy + H2 + H1 + 15} color={TXT}>{w1}</Label>
      <Label x={ox - 14} y={oy + H2 + H1 / 2} color={TXT}>{h1}</Label>
      <Label x={ox + W2 / 2} y={oy - 10} color={INK}>{w2}</Label>
      <Label x={ox + W2 + 12} y={oy + H2 / 2} color={INK}>{h2}</Label>
    </svg>
  )
}

function ScatterPlot({ direction = 'positive', showLine = true, label_x = 'Hours Studied', label_y = 'Score' }) {
  const pts = direction === 'positive'
    ? [[25,130],[40,115],[55,105],[70,95],[85,80],[100,70],[115,60],[130,50],[145,45]]
    : [[25,50],[40,55],[55,70],[70,80],[85,90],[100,100],[115,115],[130,125],[145,140]]

  const x1 = pts[0][0], y1 = pts[0][1]
  const x2 = pts[pts.length-1][0], y2 = pts[pts.length-1][1]

  return (
    <svg viewBox="0 0 200 180" width="200" height="180">
      {/* axes */}
      <line x1="20" y1="10" x2="20" y2="155" stroke={GRAY} strokeWidth="2" />
      <line x1="20" y1="155" x2="175" y2="155" stroke={GRAY} strokeWidth="2" />
      {/* axis arrows */}
      <polygon points="20,8 16,16 24,16" fill={GRAY} />
      <polygon points="177,155 169,151 169,159" fill={GRAY} />
      {/* regression line */}
      {showLine && <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK2} strokeWidth="1.5" strokeDasharray="4,3" />}
      {/* dots */}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={INK} opacity="0.8" />
      ))}
      {/* axis labels */}
      <Label x={98} y={172} color={GRAY} size={11}>{label_x}</Label>
      <Label x={8} y={83} color={GRAY} size={11}>{label_y}</Label>
    </svg>
  )
}

function BarChart({ bars = [{ label: 'A', value: 4 }, { label: 'B', value: 7 }, { label: 'C', value: 5 }, { label: 'D', value: 3 }] }) {
  const maxVal = Math.max(...bars.map(b => b.value))
  const chartH = 100, barW = 28, gap = 12, ox = 30, oy = 20
  const totalW = bars.length * (barW + gap) + gap + ox + 20
  return (
    <svg viewBox={`0 0 ${totalW} 160`} width={totalW} height={160}>
      {/* y axis */}
      <line x1={ox} y1={oy} x2={ox} y2={oy + chartH} stroke={GRAY} strokeWidth="1.5" />
      {/* x axis */}
      <line x1={ox} y1={oy + chartH} x2={totalW - 10} y2={oy + chartH} stroke={GRAY} strokeWidth="1.5" />
      {bars.map((bar, i) => {
        const bh = (bar.value / maxVal) * chartH
        const bx = ox + gap + i * (barW + gap)
        const by = oy + chartH - bh
        return (
          <g key={i}>
            <rect x={bx} y={by} width={barW} height={bh}
              fill={INK} opacity="0.7" rx="2" />
            <Label x={bx + barW / 2} y={oy + chartH + 14} color={TXT} size={12}>{bar.label}</Label>
            <Label x={bx + barW / 2} y={by - 8} color={INK} size={11}>{bar.value}</Label>
          </g>
        )
      })}
    </svg>
  )
}

function SimilarTriangles({ scale = 2 }) {
  return (
    <svg viewBox="0 0 240 130" width="240" height="130">
      {/* small triangle */}
      <polygon points="10,110 70,110 70,30"
        fill={FILL} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <RightAngle x={70} y={110} size={8} />
      <Label x={40} y={122} color={TXT} size={11}>3</Label>
      <Label x={79} y={72} color={TXT} size={11}>4</Label>
      <Label x={30} y={65} color={INK} size={11}>5</Label>
      {/* larger triangle */}
      <polygon points="130,110 230,110 230,50"
        fill="#ddd6fe" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <RightAngle x={230} y={110} size={8} />
      <Label x={180} y={122} color={TXT} size={11}>6</Label>
      <Label x={239} y={83} color={TXT} size={11}>8</Label>
      <Label x={170} y={72} color={INK} size={11}>10</Label>
      {/* scale label */}
      <Label x={120} y={60} color={GRAY} size={11}>scale ×{scale}</Label>
    </svg>
  )
}

function CircleEquation({ h = 3, k = -2, r = 5 }) {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200">
      {/* axes */}
      <line x1="10" y1="100" x2="190" y2="100" stroke={GRAY} strokeWidth="1" />
      <line x1="100" y1="10" x2="100" y2="190" stroke={GRAY} strokeWidth="1" />
      {/* circle — center at (100,100) for display, offset by h,k */}
      <circle cx={100 + h * 8} cy={100 - k * 8} r={r * 8}
        fill={FILL} stroke={INK} strokeWidth="2.5" />
      {/* center dot */}
      <circle cx={100 + h * 8} cy={100 - k * 8} r="3" fill={INK} />
      <Label x={100 + h * 8 + 5} y={100 - k * 8 - 10} color={INK} size={11}>({h},{k})</Label>
      {/* radius line */}
      <line x1={100 + h * 8} y1={100 - k * 8}
        x2={100 + h * 8 + r * 8} y2={100 - k * 8}
        stroke={INK2} strokeWidth="1.5" />
      <Label x={100 + h * 8 + r * 4} y={100 - k * 8 - 8} color={INK2} size={11}>r={r}</Label>
    </svg>
  )
}

/* ── main export ──────────────────────────────────────────────────────────── */
export default function QuestionVisual({ visual }) {
  if (!visual) return null
  const { type, ...props } = visual

  const inner = (() => {
    switch (type) {
      case 'right_triangle':         return <RightTriangle {...props} />
      case 'triangle_height':        return <TriangleWithHeight {...props} />
      case 'rectangle':              return <RectangleSVG {...props} />
      case 'circle':                 return <CircleSVG {...props} />
      case 'sector':                 return <SectorSVG {...props} />
      case '30_60_90':               return <Angle3060_90 />
      case '45_45_90':               return <Angle4545_90 />
      case 'parallel_transversal':   return <ParallelTransversal {...props} />
      case 'l_shape':                return <LShapeSVG {...props} />
      case 'scatter_positive':       return <ScatterPlot direction="positive" {...props} />
      case 'scatter_negative':       return <ScatterPlot direction="negative" {...props} />
      case 'bar_chart':              return <BarChart {...props} />
      case 'similar_triangles':      return <SimilarTriangles {...props} />
      case 'circle_equation':        return <CircleEquation {...props} />
      default:                       return null
    }
  })()

  if (!inner) return null

  return (
    <div className="flex justify-center my-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
      {inner}
    </div>
  )
}
