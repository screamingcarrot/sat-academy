import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard      from './screens/Dashboard'
import ModuleScreen   from './screens/ModuleScreen'
import LearnScreen    from './screens/LearnScreen'
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/"              element={<Dashboard />} />
      <Route path="/math"          element={<ModuleScreen module="math" />} />
      <Route path="/english"       element={<ModuleScreen module="english" />} />
      <Route path="/learn/:itemId" element={<LearnScreen />} />
      <Route path="/settings"      element={<SettingsScreen />} />
      <Route path="*"              element={<Navigate to="/" replace />} />
    </Routes>
  )
}
