import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronDown, ChevronUp, Trophy } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import ProgressBar from '../components/ProgressBar'
import TopicModal   from './TopicModal'
import { MATH_UNITS, ENGLISH_UNITS, getUnitProgress } from '../data/curriculum'
import { getProgress } from '../utils/storage'

const DIFF_COLORS = {
  easy:   'badge-easy',
  medium: 'badge-medium',
  hard:   'badge-hard',
}

const UNIT_HEADER_COLORS = {
  brand:   'from-brand-600 to-brand-700',
  violet:  'from-violet-600 to-violet-700',
  teal:    'from-teal-600 to-teal-700',
  emerald: 'from-emerald-600 to-emerald-700',
  amber:   'from-amber-500 to-amber-600',
  rose:    'from-rose-500 to-rose-600',
  sky:     'from-sky-500 to-sky-600',
}

function SubunitCard({ subunit, progress, onClick }) {
  const items = subunit.items || []
  const done  = items.filter(i => progress[i.id]?.completed).length
  const pct   = items.length > 0 ? Math.round((done / items.length) * 100) : 0
  const isComplete = pct === 100

  return (
    <button
      onClick={onClick}
      className="group card p-4 rounded-2xl shadow-card hover:shadow-card-hover text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 dark:hover:border-brand-700 relative overflow-hidden"
    >
      {isComplete && (
        <div className="absolute top-2 right-2">
          <Trophy size={16} className="text-sat-gold fill-sat-gold" />
        </div>
      )}

      <div className="flex items-start gap-2 mb-2">
        <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
          {subunit.id}
        </span>
        <span className={`badge ${DIFF_COLORS[subunit.difficulty]}`}>
          {subunit.difficulty}
        </span>
      </div>

      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-snug mb-3 pr-4">
        {subunit.title}
      </p>

      {items.length > 0 ? (
        <div className="flex items-center gap-2 mt-auto pt-1">
          <ProgressBar value={done} max={items.length} size="sm" className="flex-1" />
          <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0 tabular-nums">{done}/{items.length}</span>
        </div>
      ) : (
        <p className="text-xs text-gray-400 dark:text-gray-500 italic">Coming soon</p>
      )}
    </button>
  )
}

function UnitSection({ unit, progress, onSubunitClick }) {
  const [expanded, setExpanded] = useState(true)
  const pct  = getUnitProgress(unit, progress)
  const c    = UNIT_HEADER_COLORS[unit.color] || UNIT_HEADER_COLORS.brand

  return (
    <div className="card rounded-2xl shadow-card overflow-hidden">
      {/* Unit header */}
      <button
        onClick={() => setExpanded(e => !e)}
        className={`w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r ${c} text-white`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold opacity-80">{unit.icon}</span>
          <div className="text-left">
            <p className="text-xs font-medium opacity-75">Unit {unit.number}</p>
            <p className="font-bold text-base leading-tight">{unit.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs opacity-75">Progress</p>
            <p className="font-bold">{pct}%</p>
          </div>
          {expanded ? <ChevronUp size={18} className="opacity-80" /> : <ChevronDown size={18} className="opacity-80" />}
        </div>
      </button>

      {/* Progress bar */}
      <div className="h-1 bg-white/20">
        <div className={`h-full bg-white/60 transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>

      {/* Subunit grid */}
      {expanded && (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in">
          {unit.subunits.map(sub => (
            <SubunitCard
              key={sub.id}
              subunit={sub}
              progress={progress}
              onClick={() => onSubunitClick(sub)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ModuleScreen({ module }) {
  const navigate = useNavigate()
  const [selectedSubunit, setSelectedSubunit] = useState(null)
  const progress = getProgress()

  const isMath  = module === 'math'
  const units   = isMath ? MATH_UNITS : ENGLISH_UNITS
  const title   = isMath ? 'Math' : 'English'
  const icon    = isMath ? '∑' : 'A'
  const gradient = isMath ? 'from-brand-500 to-brand-700' : 'from-amber-500 to-amber-600'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 page-enter">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button onClick={() => navigate('/')} className="btn-ghost p-2 -ml-2">
            <ArrowLeft size={18} />
          </button>

          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm`}>
            {icon}
          </div>
          <span className="font-bold text-gray-900 dark:text-white">{title}</span>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        {units.map(unit => (
          <UnitSection
            key={unit.id}
            unit={unit}
            progress={progress}
            onSubunitClick={setSelectedSubunit}
          />
        ))}
      </main>

      {/* Topic Modal */}
      {selectedSubunit && (
        <TopicModal
          subunit={selectedSubunit}
          progress={progress}
          onClose={() => setSelectedSubunit(null)}
          onLearn={(itemId) => { setSelectedSubunit(null); navigate(`/learn/${itemId}`) }}
          onPractice={(itemId) => { setSelectedSubunit(null); navigate(`/learn/${itemId}?tab=practice`) }}
        />
      )}
    </div>
  )
}
