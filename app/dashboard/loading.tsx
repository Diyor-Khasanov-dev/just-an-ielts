'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function DashboardLoading() {
  const { t } = useLanguage()

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-md animate-bounce">
        <Sparkles size={28} />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-extrabold text-gray-900">{t.loading.loadingWorkspace}</h3>
        <p className="text-xs text-gray-500">{t.loading.preparingSession}</p>
      </div>
    </div>
  )
}
