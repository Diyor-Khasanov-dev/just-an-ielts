'use client'

import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggleSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 800) {
      setMobileMenuOpen((prev) => !prev)
    } else {
      setIsCollapsed((prev) => !prev)
    }
  }

  return (
    <div className="dashboard-shell">
      <Sidebar
        isOpen={mobileMenuOpen}
        isCollapsed={isCollapsed}
        onClose={() => setMobileMenuOpen(false)}
        onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
      />
      <div className={`dashboard-main ${isCollapsed ? 'collapsed' : ''}`}>
        <Navbar onToggleSidebar={handleToggleSidebar} isCollapsed={isCollapsed} />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  )
}
