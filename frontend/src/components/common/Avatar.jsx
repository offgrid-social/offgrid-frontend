const SIZES = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-18 h-18 text-xl',
}

export default function Avatar({ user, size = 'md' }) {
  const sizeClass = SIZES[size] ?? SIZES.md
  const initials = user?.displayName
    ? user.displayName.slice(0, 2).toUpperCase()
    : (user?.pubkey ?? '??').slice(5, 7).toUpperCase()

  return (
    <div
      className={`${sizeClass} rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0 font-mono font-semibold text-content-2 select-none`}
      aria-label={user?.displayName ?? 'Anonymous'}
    >
      {initials}
    </div>
  )
}
