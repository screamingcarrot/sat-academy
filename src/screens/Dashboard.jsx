import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Flame, Calendar, BookOpen, TrendingUp,
  AlertCircle, ChevronRight, Settings, Star
} from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import ProgressBar  from '../components/ProgressBar'
import {
  getProgress, getStreak, getDaysUntilSAT,
  getRecentActivity, getSettings
} from '../utils/storage'
import { MATH_UNITS, ENGLISH_UNITS, getUnitProgress, getAllSubunits } from '../data/curriculum'

const UNIT_COLORS = {
  brand:   { bar: 'from-brand-500 to-brand-400',   bg: 'bg-brand-50 dark:bg-brand-950/40',   text: 'text-brand-700 dark:text-brand-300',   border: 'border-brand-200 dark:border-brand-800'  },
  violet:  { bar: 'from-violet-500 to-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/40', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-200 dark:border-violet-800' },
  teal:    { bar: 'from-teal-500 to-teal-400',     bg: 'bg-teal-50 dark:bg-teal-950/40',     text: 'text-teal-700 dark:text-teal-300',     border: 'border-teal-200 dark:border-teal-800'   },
  emerald: { bar: 'from-emerald-500 to-emerald-400',bg: 'bg-emerald-50 dark:bg-emerald-950/40',text:'text-emerald-700 dark:text-emerald-300',border:'border-emerald-200 dark:border-emerald-800'},
  amber:   { bar: 'from-amber-500 to-amber-400',   bg: 'bg-amber-50 dark:bg-amber-950/40',   text: 'text-amber-700 dark:text-amber-300',   border: 'border-amber-200 dark:border-amber-800'  },
  rose:    { bar: 'from-rose-500 to-rose-400',     bg: 'bg-rose-50 dark:bg-rose-950/40',     text: 'text-rose-700 dark:text-rose-300',     border: 'border-rose-200 dark:border-rose-800'   },
  sky:     { bar: 'from-sky-500 to-sky-400',       bg: 'bg-sky-50 dark:bg-sky-950/40',       text: 'text-sky-700 dark:text-sky-300',       border: 'border-sky-200 dark:border-sky-800'     },
}

function UnitProgressCard({ unit }) {
  const progress = getProgress()
  const pct = getUnitProgress(unit, progress)
  const c = UNIT_COLORS[unit.color] || UNIT_COLORS.brand

  return (
    <div className={`card p-4 rounded-xl border ${c.border} ${c.bg} flex flex-col gap-2`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-lg font-bold ${c.text}`}>{unit.icon}</span>
          <div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-tight">
              {unit.number ? `Unit ${unit.number}` : ''}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{unit.title}</p>
          </div>
        </div>
        <span className={`text-sm font-bold ${c.text}`}>{pct}%</span>
      </div>
      <div className="progress-track h-1.5">
        <div className={`h-full bg-gradient-to-r ${c.bar} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function WeakPointCard({ item, onStudy }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl">
      <AlertCircle size={16} className="text-amber-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{item.title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{item.id}</p>
      </div>
      <button onClick={() => onStudy(item)} className="btn-primary py-1.5 px-3 text-xs flex-shrink-0">
        Study Now
      </button>
    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState({ progress: {}, streak: 0, days: null, activity: [], weak: [] })

  useEffect(() => {
    const progress = getProgress()
    const allItems = getAllSubunits().flatMap(s => s.items)

    // Weak points: lowest accuracy or not practiced in 3+ days, limit 3
    const weak = allItems
      .filter(item => {
        const p = progress[item.id]
        if (!p) return true // never practiced
        if (p.accuracy < 70) return true
        const daysSince = (Date.now() - new Date(p.lastStudied)) / 86400000
        return daysSince > 3
      })
      .slice(0, 3)

    setData({
      progress,
      streak: getStreak(),
      days: getDaysUntilSAT(),
      activity: getRecentActivity(),
      weak,
    })
  }, [])

  const handleStudyNow = (item) => navigate(`/learn/${item.id}`)
  const formatTime = (iso) => {
    const d = new Date(iso)
    const now = new Date()
    const diff = now - d
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
    return d.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 page-enter">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <Star size={14} className="text-white fill-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white tracking-tight">SAT Academy</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/settings')} className="btn-ghost p-2">
              <Settings size={18} />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* ── Hero stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Streak */}
          <div className="card p-4 rounded-2xl flex flex-col items-center text-center gap-1 shadow-card">
            <span className="streak-fire text-2xl select-none">🔥</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{data.streak}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Day streak</span>
          </div>

          {/* Days to SAT */}
          <div className="card p-4 rounded-2xl flex flex-col items-center text-center gap-1 shadow-card">
            <Calendar size={20} className="text-brand-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {data.days !== null ? data.days : '—'}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Days to SAT</span>
          </div>

          {/* Math progress */}
          <div className="card p-4 rounded-2xl flex flex-col items-center text-center gap-1 shadow-card">
            <TrendingUp size={20} className="text-violet-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {(() => {
                const allMath = MATH_UNITS.flatMap(u => u.subunits.flatMap(s => s.items))
                const done = allMath.filter(i => data.progress[i.id]?.completed).length
                return `${done}/${allMath.length}`
              })()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Math done</span>
          </div>

          {/* English progress */}
          <div className="card p-4 rounded-2xl flex flex-col items-center text-center gap-1 shadow-card">
            <BookOpen size={20} className="text-amber-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {(() => {
                const allEng = ENGLISH_UNITS.flatMap(u => u.subunits)
                const done = allEng.filter(s => data.progress[s.id]?.completed).length
                return `${done}/${allEng.length}`
              })()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">English done</span>
          </div>
        </div>

        {/* ── Module navigation ── */}
        <div className="grid sm:grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/math')}
            className="group card p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 flex items-center gap-4 text-left hover:border-brand-300 dark:hover:border-brand-700"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
              ∑
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 dark:text-white">Math</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">4 units · Algebra through Geometry</p>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/english')}
            className="group card p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 flex items-center gap-4 text-left hover:border-amber-300 dark:hover:border-amber-700"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 dark:text-white">English</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">3 units · Reading & Writing</p>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* ── Unit progress ── */}
          <div className="card p-5 rounded-2xl shadow-card">
            <h2 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-500" /> Unit Progress
            </h2>
            <div className="grid gap-2">
              {[...MATH_UNITS, ...ENGLISH_UNITS].map(unit => (
                <UnitProgressCard key={unit.id} unit={unit} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* ── Weak points ── */}
            {data.weak.length > 0 && (
              <div className="card p-5 rounded-2xl shadow-card">
                <h2 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle size={16} className="text-amber-500" /> Needs Practice
                </h2>
                <div className="flex flex-col gap-2">
                  {data.weak.map(item => (
                    <WeakPointCard key={item.id} item={item} onStudy={handleStudyNow} />
                  ))}
                </div>
              </div>
            )}

            {/* ── Recent activity ── */}
            <div className="card p-5 rounded-2xl shadow-card">
              <h2 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-teal-500" /> Recent Activity
              </h2>
              {data.activity.length === 0 ? (
                <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">
                  No activity yet — start studying!
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  {data.activity.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="flex-1 text-gray-700 dark:text-gray-200 font-medium">{a.subunitId}</span>
                      <span className="text-gray-400 dark:text-gray-500 text-xs">{formatTime(a.timestamp)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
