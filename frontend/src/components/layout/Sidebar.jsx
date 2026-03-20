import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Feed', icon: '⊟' },
  { to: '/explore', label: 'Explore', icon: '◎' },
  { to: '/settings', label: 'Settings', icon: '⚙' },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] border-r border-border py-4">
      <nav className="flex flex-col gap-1 px-2">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors ${
                isActive
                  ? 'text-content bg-surface-2 border-l-2 border-accent pl-[10px]'
                  : 'text-content-2 hover:text-content hover:bg-surface-2'
              }`
            }
          >
            <span className="w-5 text-center">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
