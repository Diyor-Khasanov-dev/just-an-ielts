'use client'

import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="dashboard-shell">
      <Sidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <div className="dashboard-main">
        <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  )
}
