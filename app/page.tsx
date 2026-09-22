"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Headphones,
  PenTool,
  Mic,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Brain,
  BarChart3,
  Flame,
  Shield,
  Layers,
  ChevronRight,
  Zap
} from "lucide-react";

export default function LandingPage() {
  const [selectedBand, setSelectedBand] = useState<number>(7.5);

  const bandDetails: Record<number, { hours: string; focus: string; vocabulary: string; strategy: string }> = {
    6.5: {
      hours: "30 - 45 mins / day",
      focus: "Mastering core grammar, basic Task 2 essay structures, and key Listening section 1-3 details.",
      vocabulary: "1,200 Band 6.5 Topic Words",
      strategy: "Focus on accuracy in easy-to-medium questions and foundational coherence."
    },
    7.0: {
      hours: "45 - 60 mins / day",
      focus: "Developing complex sentence structures, skim/scan speed in Reading, and fluency in Speaking Part 2.",
      vocabulary: "2,000 High-Frequency Academic Words",
      strategy: "Target True/False/Not Given traps and refine paragraph transitions."
    },
    7.5: {
      hours: "1 - 1.5 hours / day",
      focus: "Advanced C1/C2 collocations, Task 1 data synthesis, and accent variety in Listening section 4.",
      vocabulary: "3,500 Band 8+ Collocations & Idioms",
      strategy: "Eliminate minor grammar errors and master task achievement for Writing Task 2."
    },
    8.0: {
      hours: "1.5 - 2 hours / day",
      focus: "Flawless task response, nuanced lexical resource, natural intonation in Speaking, and 100% Reading speed.",
      vocabulary: "5,000 Precision Academic & Topic Terms",
      strategy: "Full exam simulation drills under strict time constraints with instant AI diagnostic reviews."
    },
    8.5: {
      hours: "2+ hours / day",
      focus: "Near-native precision, subtle tone detection in Listening, and sophisticated argumentation in Writing.",
      vocabulary: "Advanced C2 Technical & Literary Bank",
      strategy: "Fine-tune idiomatic fluency and flawless complex grammatical execution."
    }
  };

  const currentDetails = bandDetails[selectedBand] || bandDetails[7.5];

  const modules = [
    {
      id: "reading",
      title: "Reading Precision",
      icon: BookOpen,
      tagline: "Speed reading & instant passage breakdown",
      desc: "Practice with Academic & General passages featuring real-time question breakdown, True/False/Not Given logic trees, and vocabulary highlighting.",
      stats: "150+ Timed Passages",
      link: "/dashboard/practice"
    },
    {
      id: "writing",
      title: "Writing Mastery",
      icon: PenTool,
      tagline: "Band 8+ structure & vocabulary replacement",
      desc: "Master Task 1 graphs, diagrams, and Task 2 opinion essays with automated structure suggestions, cohesion analysis, and lexical enhancement.",
      stats: "AI Task 1 & 2 Evaluator",
      link: "/dashboard/practice"
    },
    {
      id: "listening",
      title: "Listening Drills",
      icon: Headphones,
      tagline: "Multi-accent audio & speed controls",
      desc: "Train your ears with authentic British, Australian, and North American accents across Sections 1 to 4 with interactive transcript sync.",
      stats: "Interactive Audio Player",
      link: "/dashboard/practice"
    },
    {
      id: "speaking",
      title: "Speaking AI Mock",
      icon: Mic,
      tagline: "Fluency, intonation & cue card feedback",
      desc: "Simulate live interview conditions with Part 1, 2, and 3 topics. Get instant feedback on pronunciation, hesitations, and vocabulary range.",
      stats: "Live Voice Drills",
      link: "/dashboard/practice"
    },
    {
      id: "vocabulary",
      title: "Smart Vocabulary",
      icon: Brain,
      tagline: "Spaced repetition & C1/C2 topic banks",
      desc: "Expand your lexical resource systematically using spaced repetition flashcards categorized by high-yield IELTS essay themes.",
      stats: "Spaced Repetition Engine",
      link: "/dashboard/vocabulary"
    }
  ];

  return (
    <div className="relative min-h-screen text-gray-100 selection:bg-[#d90007] selection:text-white">
      {/* Background Ambient Glows */}
      <div className="red-glow-bg top-[-100px] left-[20%] w-[600px] h-[600px]" />
      <div className="red-glow-bg top-[40%] right-[-100px] w-[500px] h-[500px]" />
      <div className="red-glow-bg bottom-[-100px] left-[-100px] w-[500px] h-[500px]" />

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#090a0f]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e60008] to-[#b80006] flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(217,0,7,0.5)] group-hover:scale-105 transition-transform">
              i
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              just an <span className="px-2 py-0.5 rounded-md bg-[#d90007] text-white text-sm font-black tracking-wide shadow-[0_0_10px_rgba(217,0,7,0.6)]">IELTS</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#goal" className="hover:text-white transition-colors">Our Goal</a>
            <a href="#modules" className="hover:text-white transition-colors">Modules</a>
            <a href="#calculator" className="hover:text-white transition-colors">Band Roadmap</a>
            <Link href="/dashboard/vocabulary" className="hover:text-white transition-colors">Vocabulary</Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              Log In
            </Link>
            <Link
              href="/dashboard"
              className="btn-ielts-red px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg"
            >
              Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="goal" className="relative pt-16 pb-20 md:pt-28 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#d90007]/30 text-xs sm:text-sm font-medium text-gray-200 mb-8 shadow-[0_0_15px_rgba(217,0,7,0.15)]">
            <Sparkles className="w-4 h-4 text-[#d90007]" />
            <span>Pure Focus • Minimal Noise • Maximum Band Result</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Master your IELTS score. <br />
            <span className="text-gradient-red">Simplified & Intelligent.</span>
          </h1>

          {/* Goal Description */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
            <strong className="text-white font-semibold">just-an-ielts</strong> is a modern, distraction-free preparation platform crafted to help candidates reach <span className="text-white underline decoration-[#d90007] decoration-2 underline-offset-4">Target Band 7.5+</span> through targeted practice across Listening, Reading, Writing, Speaking, and Vocabulary.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="btn-ielts-red w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 shadow-xl"
            >
              Start Practicing Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="glass-card w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white flex items-center justify-center gap-2"
            >
              Sign In to Your Account
            </Link>
          </div>
        </div>

        {/* Hero Visual Preview - Glassmorphism UI Mockup */}
        <div className="mt-16 sm:mt-20 relative max-w-5xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative z-10">
            {/* Header Mockup */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#d90007]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-gray-400 font-mono ml-2">just-an-ielts.app / band-8.0-tracker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#d90007]/20 border border-[#d90007]/40 text-[#ff4d4d] text-xs font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> 14 Day Practice Streak
                </span>
              </div>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Overall Target", score: "8.0", color: "text-[#ff4d4d]", icon: Shield },
                { label: "Reading Band", score: "8.5", color: "text-emerald-400", icon: BookOpen },
                { label: "Listening Band", score: "8.0", color: "text-sky-400", icon: Headphones },
                { label: "Writing Band", score: "7.5", color: "text-amber-400", icon: PenTool }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="glass-card p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-medium">{item.label}</span>
                      <IconComp className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-black ${item.color}`}>{item.score}</div>
                  </div>
                );
              })}
            </div>

            {/* Simulated Live Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#ff4d4d] uppercase tracking-wider">Active Task</span>
                    <span className="text-xs text-gray-400">Task 2 Essay AI Review</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Academic Writing Task 2: Technology &amp; Society
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    &quot;Some people argue that artificial intelligence will replace human educators...&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Coherence &amp; Lexical Resource: Band 8.0
                  </span>
                  <Link href="/dashboard/practice" className="text-xs font-semibold text-[#ff4d4d] hover:underline flex items-center gap-1">
                    Continue <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Vocabulary</span>
                    <span className="text-xs text-gray-400">92% Retention</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">C1/C2 Essay Collocations</h4>
                  <p className="text-xs text-gray-400">Mastered 24 new academic phrases today.</p>
                </div>
                <Link
                  href="/dashboard/vocabulary"
                  className="mt-4 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg text-center transition-colors block"
                >
                  Open Vocabulary Bank
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section id="modules" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Everything you need for <span className="text-gradient-red">Band 8.0+</span>
          </h2>
          <p className="text-gray-400 text-base">
            Targeted drills and AI-assisted tools for all four exam components plus high-yield vocabulary.
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const IconComponent = mod.icon;
            return (
              <div
                key={mod.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between relative group hover:border-[#d90007]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#d90007]/15 border border-[#d90007]/30 flex items-center justify-center text-[#ff4d4d] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {mod.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                  <p className="text-xs font-medium text-[#ff4d4d] mb-3">{mod.tagline}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{mod.desc}</p>
                </div>

                <Link
                  href={mod.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-gray-200 hover:text-white group-hover:text-[#ff4d4d] transition-colors"
                >
                  <span>Practice Module</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}

          {/* Interactive Quick Action Card */}
          <div className="glass-panel p-6 rounded-2xl border border-[#d90007]/30 bg-gradient-to-br from-[#d90007]/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d90007] flex items-center justify-center text-white font-bold text-xl mb-5 shadow-[0_0_15px_rgba(217,0,7,0.5)]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to test your skill?</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Jump straight into full practice mode or view your user profile dashboard to track score analytics.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard/practice"
                className="btn-ielts-red w-full py-2.5 rounded-xl text-sm font-bold text-center block"
              >
                Go to Practice Center
              </Link>
              <Link
                href="/profile"
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-center text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors block"
              >
                View Profile &amp; Progress
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Band Goal Roadmap / Calculator */}
      <section id="calculator" className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4d4d] mb-2 block">Interactive Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Select your target band score
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-8">
              See the exact preparation daily commitment and strategic focus needed to achieve your target.
            </p>

            {/* Band Selector Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[6.5, 7.0, 7.5, 8.0, 8.5].map((band) => (
                <button
                  key={band}
                  onClick={() => setSelectedBand(band)}
                  className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                    selectedBand === band
                      ? "bg-[#d90007] text-white shadow-[0_0_20px_rgba(217,0,7,0.5)] scale-105"
                      : "glass-card text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Band {band}
                </button>
              ))}
            </div>

            {/* Selected Band Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="glass-card p-5 rounded-xl">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5 font-medium">
                  <BarChart3 className="w-4 h-4 text-[#ff4d4d]" /> Estimated Daily Time
                </div>
                <div className="text-lg font-bold text-white">{currentDetails.hours}</div>
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5 font-medium">
                  <Brain className="w-4 h-4 text-sky-400" /> Target Lexical Goal
                </div>
                <div className="text-lg font-bold text-white">{currentDetails.vocabulary}</div>
              </div>

              <div className="glass-card p-5 rounded-xl sm:col-span-2">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5 font-medium">
                  <Layers className="w-4 h-4 text-emerald-400" /> Core Focus Area
                </div>
                <div className="text-sm font-medium text-gray-200">{currentDetails.focus}</div>
              </div>

              <div className="glass-card p-5 rounded-xl sm:col-span-2">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#ff4d4d]" /> Key Exam Strategy
                </div>
                <div className="text-sm font-medium text-gray-200">{currentDetails.strategy}</div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/dashboard"
                className="btn-ielts-red inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              >
                Start Band {selectedBand} Preparation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Goal Callout Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-14 border border-[#d90007]/30 text-center overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
              Start your journey to IELTS <span className="text-gradient-red">Success</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8">
              No subscription clutter. Just the precise tools you need to practice, learn high-yield vocabulary, and track your band score progression.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="btn-ielts-red w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold shadow-xl flex items-center justify-center gap-2"
              >
                Open Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="glass-card w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-gray-200 hover:text-white"
              >
                Log In / Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#06070a] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#d90007] flex items-center justify-center font-bold text-white text-base">
              i
            </div>
            <span className="text-base font-bold text-white">
              just an <span className="text-[#ff4d4d]">IELTS</span>
            </span>
          </div>

          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} just-an-ielts. Simple, modern IELTS prep for high-achieving candidates.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/dashboard/practice" className="hover:text-white transition-colors">Practice</Link>
            <Link href="/dashboard/vocabulary" className="hover:text-white transition-colors">Vocabulary</Link>
            <Link href="/login" className="hover:text-white transition-colors">Login</Link>
            <Link href="/profile" className="hover:text-white transition-colors">Profile</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
