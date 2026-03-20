import Badge from './Badge'

export default function BadgeList({ badges = [], size = 16 }) {
  if (!badges.length) return null
  return (
    <span className="flex items-center gap-1 shrink-0">
      {badges.map(type => (
        <Badge key={type} type={type} size={size} />
      ))}
    </span>
  )
}
