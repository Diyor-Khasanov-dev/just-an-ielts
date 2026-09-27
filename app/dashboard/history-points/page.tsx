'use client'

import { useState } from 'react'
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  Flame,
  Headphones,
  History,
  Mic2,
  PenLine,
  Sparkles,
  Star,
  Trophy,
  Zap
} from 'lucide-react'

const historyLogs = [
  { id: 1, type: 'writing', title: 'Task 2 Opinion Essay · AI Jobs', result: 'Band 7.5', xp: '+120 XP', date: 'Today, 09:40 AM', duration: '35 mins' },
  { id: 2, type: 'listening', title: 'Section 3 · Environmental Seminar', result: '9 / 10 Correct', xp: '+80 XP', date: 'Yesterday, 04:15 PM', duration: '12 mins' },
  { id: 3, type: 'speaking', title: 'Part 2 Cue Card · Journey Memory', result: 'Band 8.0', xp: '+100 XP', date: 'Wed, 24 Sep', duration: '10 mins' },
  { id: 4, type: 'reading', title: 'Passage 2 · Urban Microclimates', result: '8 / 10 Correct', xp: '+90 XP', date: 'Tue, 23 Sep', duration: '18 mins' },
  { id: 5, type: 'tests', title: 'Full Listening Mock Exam #02', result: 'Band 7.5', xp: '+250 XP', date: 'Mon, 22 Sep', duration: '30 mins' },
]

export default function HistoryPointsPage() {
  const [filterType, setFilterType] = useState<string>('all')

  const filteredLogs = filterType === 'all'
    ? historyLogs
    : historyLogs.filter((log) => log.type === filterType)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACTIVITY LOG & MILESTONES</p>
          <h1>Practice History & Points</h1>
          <p>Review your completed practice sessions, earned experience points, and unlocked badges.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-200 flex items-center gap-1">
            <Trophy size={14} className="text-amber-500" /> Total Points: 1,450 XP
          </span>
        </div>
      </div>

      {/* Points & Milestones Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Trophy size={24} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-gray-400">Total Preparation Points</span>
            <h3 className="text-2xl font-extrabold text-gray-900">1,450 XP</h3>
            <span className="text-[11px] text-emerald-600 font-bold">Level 5 · Senior Scholar</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Flame size={24} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-gray-400">Active Study Streak</span>
            <h3 className="text-2xl font-extrabold text-gray-900">8 Days</h3>
            <span className="text-[11px] text-indigo-600 font-bold">+50 Bonus XP tomorrow</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/90 shadow-md flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Award size={24} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-gray-400">Unlocked Milestones</span>
            <h3 className="text-2xl font-extrabold text-gray-900">6 Badges</h3>
            <span className="text-[11px] text-purple-600 font-bold">Next: Task 2 Specialist</span>
          </div>
        </div>
      </div>

      {/* Unlocked Achievement Badges */}
      <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <h3 className="text-base font-extrabold text-gray-900">Unlocked Achievement Badges</h3>
          <span className="text-xs text-indigo-600 font-bold">View All (6)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: '7-Day Streak', icon: Flame, color: 'text-amber-500 bg-amber-50 border-amber-200' },
            { title: 'Task 2 Master', icon: PenLine, color: 'text-indigo-500 bg-indigo-50 border-indigo-200' },
            { title: 'Ear Trainer', icon: Headphones, color: 'text-sky-500 bg-sky-50 border-sky-200' },
            { title: 'Vocab Ninja', icon: Sparkles, color: 'text-purple-500 bg-purple-50 border-purple-200' },
            { title: 'Speed Reader', icon: BookOpen, color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
            { title: 'Cue Card Specialist', icon: Mic2, color: 'text-rose-500 bg-rose-50 border-rose-200' },
          ].map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div key={idx} className={`p-3 rounded-xl border text-center space-y-1.5 ${badge.color}`}>
                <Icon size={20} className="mx-auto" />
                <span className="text-xs font-bold block">{badge.title}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* History Activity Timeline */}
      <section className="glass-card rounded-2xl p-6 border border-white/90 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <History size={20} className="text-indigo-600" />
            <h3 className="text-lg font-extrabold text-gray-900">Practice History Log</h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-bold">
            {['all', 'writing', 'listening', 'reading', 'speaking', 'tests'].map((f) => (
              <button
                key={f}
                onClick={() => setFilterType(f)}
                className={`px-3 py-1 rounded-lg capitalize transition cursor-pointer ${
                  filterType === f ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredLogs.map((log) => (
            <div key={log.id} className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{log.title}</h4>
                  <span className="text-[11px] text-gray-400 flex items-center gap-2 mt-0.5">
                    <span><Clock size={11} className="inline mr-1" />{log.duration}</span>
                    <span>· {log.date}</span>
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <b className="text-xs font-bold text-indigo-600 block">{log.result}</b>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {log.xp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
