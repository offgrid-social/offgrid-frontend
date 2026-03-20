function formatRelative(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'now'
  if (mins < 60) return `${mins}m`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d`
  return new Date(iso).toLocaleDateString('en', { month: 'short', day: 'numeric' })
}

export default function Timestamp({ iso }) {
  return (
    <time
      dateTime={iso}
      title={new Date(iso).toLocaleString()}
      className="text-xs text-content-3 shrink-0"
    >
      {formatRelative(iso)}
    </time>
  )
}
