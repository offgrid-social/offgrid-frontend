import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-14 px-4 bg-surface-1 border-b border-border">
      <Link to="/" className="text-lg font-bold text-accent tracking-tight">
        offgrid
      </Link>
      <div className="w-8 h-8 rounded-full bg-surface-2 border border-border" aria-label="Profile" />
    </header>
  )
}
