import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import BottomNav from './BottomNav'

export default function AppShell() {
  return (
    <div className="min-h-screen bg-surface text-content">
      <Navbar />
      <div className="flex max-w-layout mx-auto">
        <Sidebar />
        <main className="flex-1 min-w-0 pb-14 lg:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
