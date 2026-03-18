const KEY = 'sat-academy'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

// ── Progress ─────────────────────────────────────────────────────────────────
// progress[subunitId] = { completed: bool, accuracy: number, lastStudied: ISO }
export function getProgress() {
  return load().progress || {}
}

export function markSubunitComplete(subunitId, correct, total) {
  const data = load()
  if (!data.progress) data.progress = {}
  data.progress[subunitId] = {
    completed: true,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    lastStudied: new Date().toISOString(),
  }
  save(data)
  recordActivity(subunitId)
  updateStreak()
}

export function updateAccuracy(subunitId, correct, total) {
  const data = load()
  if (!data.progress) data.progress = {}
  const existing = data.progress[subunitId] || {}
  data.progress[subunitId] = {
    ...existing,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : (existing.accuracy || 0),
    lastStudied: new Date().toISOString(),
  }
  save(data)
  recordActivity(subunitId)
  updateStreak()
}

export function resetProgress() {
  const data = load()
  data.progress = {}
  data.activity = []
  data.streak = { count: 0, lastDate: null }
  save(data)
}

// ── Activity ──────────────────────────────────────────────────────────────────
function recordActivity(subunitId) {
  const data = load()
  if (!data.activity) data.activity = []
  data.activity = [
    { subunitId, timestamp: new Date().toISOString() },
    ...data.activity.filter(a => a.subunitId !== subunitId),
  ].slice(0, 20) // keep last 20 unique
  save(data)
}

export function getRecentActivity() {
  return (load().activity || []).slice(0, 3)
}

// ── Streak ────────────────────────────────────────────────────────────────────
function updateStreak() {
  const data = load()
  if (!data.streak) data.streak = { count: 0, lastDate: null }

  const today = new Date().toDateString()
  const last  = data.streak.lastDate

  if (last === today) return // already recorded today
  const yesterday = new Date(Date.now() - 86400000).toDateString()
  data.streak.count = last === yesterday ? data.streak.count + 1 : 1
  data.streak.lastDate = today
  save(data)
}

export function getStreak() {
  return (load().streak || { count: 0 }).count
}

// ── Settings ──────────────────────────────────────────────────────────────────
export function getSettings() {
  return load().settings || {
    satDate: '2026-05-02',
    mcqPercent: 80,
    answerMode: 'mixed', // 'mcq' | 'free' | 'mixed'
    confirmAnswer: false, // true = show Check button before grading
  }
}

export function saveSettings(settings) {
  const data = load()
  data.settings = settings
  save(data)
}

// ── Flagged questions ─────────────────────────────────────────────────────────
// flagged is a Set stored as an array: ['1.1a-0-0', '1.1b-1-2', ...]
export function getFlagged() {
  return new Set(load().flagged || [])
}

export function toggleFlagged(questionId) {
  const data = load()
  const set  = new Set(data.flagged || [])
  if (set.has(questionId)) set.delete(questionId)
  else set.add(questionId)
  data.flagged = [...set]
  save(data)
  return set.has(questionId) // returns new state
}

// ── Days until SAT ────────────────────────────────────────────────────────────
export function getDaysUntilSAT() {
  const { satDate } = getSettings()
  if (!satDate) return null
  const diff = new Date(satDate) - new Date()
  return Math.max(0, Math.ceil(diff / 86400000))
}
