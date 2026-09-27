'use client'

import { useState } from 'react'
import {
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Lock,
  Save,
  Shield,
  Sparkles,
  Target,
  User
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'reminders' | 'account'>('profile')
  const [targetBand, setTargetBand] = useState('7.5')
  const [examDate, setExamDate] = useState('2026-10-20')
  const [dailyMinutes, setDailyMinutes] = useState(30)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 3000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">PREFERENCES & GOALS</p>
          <h1>Settings</h1>
          <p>Customize your target band, exam date timeline, daily reminders, and profile preferences.</p>
        </div>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
        {[
          { id: 'profile', label: 'Profile & Band Target', icon: Target },
                { id: 'reminders', label: 'Practice Reminders', icon: Bell },
                { id: 'account', label: 'Account Security', icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'profile' | 'reminders' | 'account')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Save Toast Notification */}
      {savedSuccess && (
        <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg flex items-center justify-between text-xs font-bold">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} />
            <span>Settings updated successfully! Your roadmap has been recalculated.</span>
          </div>
        </div>
      )}

      {/* Tab Form Containers */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md">
        <form onSubmit={handleSave} className="space-y-6">
          {activeTab === 'profile' && (
            <div className="space-y-5 max-w-xl">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3">
                Profile & Band Goals
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">Full Name</label>
                <input
                  type="text"
                  defaultValue="Alex Nguyen"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">Email Address</label>
                <input
                  type="email"
                  defaultValue="alex.nguyen@example.com"
                  disabled
                  className="w-full p-3 rounded-xl border border-gray-200 bg-gray-100 text-xs font-semibold text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">Target Band Score</label>
                <select
                  value={targetBand}
                  onChange={(e) => setTargetBand(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="6.5">Band 6.5</option>
                  <option value="7.0">Band 7.0</option>
                  <option value="7.5">Band 7.5</option>
                  <option value="8.0">Band 8.0</option>
                  <option value="8.5">Band 8.5</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">Upcoming Exam Date</label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'reminders' && (
            <div className="space-y-5 max-w-xl">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3">
                Study Pace & Reminders
              </h3>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">Daily Practice Goal</label>
                <div className="flex items-center gap-2">
                  {[15, 30, 45, 60].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDailyMinutes(mins)}
                      className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                        dailyMinutes === mins
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
                          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {mins} mins/day
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <b className="text-xs font-bold text-gray-900 block">Daily Study Notifications</b>
                  <span className="text-[11px] text-gray-500">Receive email reminders when your streak is at risk.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors cursor-pointer p-0.5 ${
                    notificationsEnabled ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="space-y-5 max-w-xl">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3">
                Account & Security
              </h3>

              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl space-y-1">
                <b className="text-xs font-bold text-indigo-900 block">Google Sign-in Active</b>
                <p className="text-[11px] text-indigo-800">Your account is connected via Google OAuth 2.0 session.</p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl transition"
                >
                  Export My Practice History (JSON)
                </button>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <Save size={15} /> Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
