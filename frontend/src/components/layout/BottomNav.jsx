import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Feed', icon: '⊟' },
  { to: '/explore', label: 'Explore', icon: '◎' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
]

export default function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-10 flex items-center justify-around h-14 bg-surface-1 border-t border-border">
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 text-xs transition-colors ${
              isActive ? 'text-accent' : 'text-content-3'
            }`
          }
        >
          <span className="text-xl leading-none">{icon}</span>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
