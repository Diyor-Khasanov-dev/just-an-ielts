'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Loading() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 text-white p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm">
        {/* Animated Brand Logo Container */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-indigo-600/30 border border-indigo-400/40 backdrop-blur-xl flex items-center justify-center shadow-2xl animate-bounce">
            <img src="/logo.png" alt="just an ielts" className="w-12 h-10 object-contain" />
          </div>
          <div className="absolute -inset-2 bg-indigo-500/20 rounded-3xl blur-md -z-10 animate-ping" />
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h2 className="text-xl font-black tracking-tight text-white flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-amber-400 animate-spin" />
            <span>{t.loading.loadingWorkspace}</span>
          </h2>
          <p className="text-xs text-indigo-200/80 leading-relaxed">
            {t.loading.preparingSession}
          </p>
        </div>

        {/* Progress Spinner Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-400 rounded-full w-2/3 animate-pulse" />
        </div>

        <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
          {t.loading.pleaseWait}
        </span>
      </div>
    </div>
  )
}
