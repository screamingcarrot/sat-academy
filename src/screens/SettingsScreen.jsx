import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Sliders, Trash2, AlertTriangle, MousePointerClick } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import { getSettings, saveSettings, resetProgress } from '../utils/storage'

export default function SettingsScreen() {
  const navigate  = useNavigate()
  const [settings, setSettings] = useState(getSettings)
  const [saved, setSaved]       = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const update = (key, val) => setSettings(s => ({ ...s, [key]: val }))

  const handleSave = () => {
    saveSettings(settings)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    resetProgress()
    setShowConfirm(false)
    navigate('/')
  }

  const modeOptions = [
    { value: 'mixed', label: 'Mixed (default)', desc: `${settings.mcqPercent}% multiple choice, ${100 - settings.mcqPercent}% free response` },
    { value: 'mcq',   label: 'Multiple Choice only', desc: 'All questions are A/B/C/D format' },
    { value: 'free',  label: 'Free Response only', desc: 'All questions require you to type an answer' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 page-enter">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button onClick={() => navigate('/')} className="btn-ghost p-2 -ml-2">
            <ArrowLeft size={18} />
          </button>
          <span className="font-bold text-gray-900 dark:text-white">Settings</span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        {/* SAT Test Date */}
        <div className="card p-5 rounded-2xl shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={18} className="text-brand-500" />
            <h2 className="font-bold text-gray-900 dark:text-white">SAT Test Date</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Set your exam date to see the countdown on your dashboard.
          </p>
          <input
            type="date"
            value={settings.satDate || ''}
            onChange={e => update('satDate', e.target.value)}
            className="input max-w-xs"
          />
        </div>

        {/* Practice Mode */}
        <div className="card p-5 rounded-2xl shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Sliders size={18} className="text-brand-500" />
            <h2 className="font-bold text-gray-900 dark:text-white">Practice Mode</h2>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            {modeOptions.map(opt => (
              <label
                key={opt.value}
                className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${
                  settings.answerMode === opt.value
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <input
                  type="radio"
                  name="answerMode"
                  value={opt.value}
                  checked={settings.answerMode === opt.value}
                  onChange={() => update('answerMode', opt.value)}
                  className="mt-0.5 accent-brand-600"
                />
                <div>
                  <p className={`text-sm font-semibold ${settings.answerMode === opt.value ? 'text-brand-700 dark:text-brand-300' : 'text-gray-800 dark:text-gray-200'}`}>
                    {opt.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{opt.desc}</p>
                </div>
              </label>
            ))}
          </div>

          {/* MCQ percent slider (only in mixed mode) */}
          {settings.answerMode === 'mixed' && (
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Multiple Choice %</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">{settings.mcqPercent}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={10}
                value={settings.mcqPercent}
                onChange={e => update('mcqPercent', Number(e.target.value))}
                className="w-full accent-brand-600"
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500 mt-1">
                <span>0% (all free)</span>
                <span>100% (all MCQ)</span>
              </div>
            </div>
          )}
        </div>

        {/* Confirm before grading */}
        <div className="card p-5 rounded-2xl shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <MousePointerClick size={18} className="text-brand-500" />
            <h2 className="font-bold text-gray-900 dark:text-white">Answer Confirmation</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Require confirm before grading</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {settings.confirmAnswer
                  ? 'A "Check Answer" button appears after selecting — tap it to submit.'
                  : 'Selecting an answer immediately grades it.'}
              </p>
            </div>
            <button
              onClick={() => update('confirmAnswer', !settings.confirmAnswer)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                settings.confirmAnswer ? 'bg-brand-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 ${
                settings.confirmAnswer ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

        {/* Theme */}
        <div className="card p-5 rounded-2xl shadow-card">
          <h2 className="font-bold text-gray-900 dark:text-white mb-3">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Dark mode</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Easier on the eyes during late-night study sessions</p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Save button */}
        <button onClick={handleSave} className={`btn-primary w-full py-3 ${saved ? 'bg-green-600 hover:bg-green-600' : ''}`}>
          {saved ? '✓ Saved!' : 'Save Settings'}
        </button>

        {/* Reset progress */}
        <div className="card p-5 rounded-2xl shadow-card border-red-200 dark:border-red-900/50">
          <div className="flex items-center gap-2 mb-2">
            <Trash2 size={18} className="text-red-500" />
            <h2 className="font-bold text-red-700 dark:text-red-400">Danger Zone</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            This will permanently delete all your progress, streaks, and activity history.
          </p>

          {!showConfirm ? (
            <button onClick={() => setShowConfirm(true)} className="text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">
              Reset all progress
            </button>
          ) : (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={16} className="text-red-500" />
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">Are you sure? This cannot be undone.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={handleReset} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
                  Yes, reset everything
                </button>
                <button onClick={() => setShowConfirm(false)} className="flex-1 btn-secondary text-sm">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
