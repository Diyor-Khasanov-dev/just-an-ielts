'use client'

import { motion } from 'framer-motion'

export default function RootLoading() {
  return (
    <div className='landing min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-var(--paper) text-var(--ink)'>
      <div className='landing-glow' />

      {/* Floating ambient orb background */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none flex items-center justify-center'
      >
        <div className='w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl animate-pulse' />
      </div>

      {/* Main Glass Spinner Container */}
      <div className='relative z-10 glass-card rounded-3xl p-8 sm:p-12 border border-white/80 dark:border-slate-800 shadow-2xl flex flex-col items-center text-center max-w-sm w-full mx-4 backdrop-blur-xl'>
        {/* Animated Brand Logo & Rings */}
        <div className='relative w-24 h-24 flex items-center justify-center mb-6'>
          {/* Outer rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className='absolute inset-0 rounded-2xl border-2 border-transparent border-t-indigo-600 border-r-purple-500 dark:border-t-indigo-400 dark:border-r-purple-400'
          />

          {/* Inner pulsating glow */}
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute inset-2 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60'
          />

          {/* Logo image */}
          <img
            src='/logo.png'
            alt='just an ielts'
            className='w-14 h-12 object-contain relative z-10'
          />
        </div>

        {/* Text Skeleton / Message */}
        <div className='space-y-2 w-full'>
          <div className='h-5 bg-gray-200 dark:bg-slate-800 rounded-full w-3/4 mx-auto animate-pulse' />
          <div className='h-3.5 bg-gray-100 dark:bg-slate-800/60 rounded-full w-1/2 mx-auto animate-pulse' />
        </div>

        {/* Pulse Bar Indicator */}
        <div className='mt-8 w-full bg-gray-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden relative'>
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className='w-1/2 h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full'
          />
        </div>
      </div>
    </div>
  )
}
