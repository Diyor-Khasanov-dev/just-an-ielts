'use client'

import { useState } from 'react'
import {
  Bell,
  CheckCircle2,
  Globe,
  Palette,
  Save,
  Shield,
  Target
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n/translations'

export default function SettingsPage() {
  const { lang, setLang, t } = useLanguage()

  const [activeTab, setActiveTab] = useState<'profile' | 'reminders' | 'appearance'>('profile')
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

  const languages: { code: Language; name: string; nativeName: string; badge: string }[] = [
    { code: 'eng', name: 'English', nativeName: 'English', badge: 'ENG' },
    { code: 'uz', name: 'Uzbek', nativeName: 'O‘zbekcha', badge: 'UZ' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', badge: 'RU' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">{t.settings.eyebrow}</p>
          <h1>{t.settings.title}</h1>
          <p>{t.settings.subtitle}</p>
        </div>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
        {[
          { id: 'profile', label: t.settings.tabProfile, icon: Target },
          { id: 'reminders', label: t.settings.tabReminders, icon: Bell },
          { id: 'appearance', label: t.settings.tabAppearance, icon: Palette },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'profile' | 'reminders' | 'appearance')}
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
            <span>{t.settings.savedSuccess}</span>
          </div>
        </div>
      )}

      {/* Tab Form Containers */}
      <section className="glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-md">
        <form onSubmit={handleSave} className="space-y-6">
          {activeTab === 'profile' && (
            <div className="space-y-5 max-w-xl">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3">
                {t.settings.profileHeader}
              </h3>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.fullName}
                </label>
                <input
                  type="text"
                  defaultValue="Alex Nguyen"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.emailAddress}
                </label>
                <input
                  type="email"
                  defaultValue="alex.nguyen@example.com"
                  disabled
                  className="w-full p-3 rounded-xl border border-gray-200 bg-gray-100 text-xs font-semibold text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.targetBandScore}
                </label>
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
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.upcomingExamDate}
                </label>
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
                {t.settings.studyPaceHeader}
              </h3>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.dailyGoal}
                </label>
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
                      {mins} {t.settings.minsDay}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <b className="text-xs font-bold text-gray-900 block">
                    {t.settings.dailyNotifications}
                  </b>
                  <span className="text-[11px] text-gray-500">
                    {t.settings.dailyNotificationsDesc}
                  </span>
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

          {activeTab === 'appearance' && (
            <div className="space-y-6 max-w-xl">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-200 pb-3">
                {t.settings.appearanceHeader}
              </h3>

              {/* Language Preference Option */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                  {t.settings.languagePreference}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {languages.map(({ code, nativeName, badge }) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      className={`p-4 rounded-2xl border text-left flex items-center justify-between transition cursor-pointer ${
                        lang === code
                          ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500'
                          : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Globe size={18} className={lang === code ? 'text-indigo-600' : 'text-gray-400'} />
                        <span className="text-xs font-bold text-gray-900">
                          {nativeName}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-extrabold rounded bg-gray-100 text-gray-600">
                        {badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <Save size={15} /> {t.settings.saveChanges}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
