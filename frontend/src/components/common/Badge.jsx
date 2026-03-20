const LABELS = {
  admin: 'Admin',
  verified: 'Verified',
  hw_support: 'Hardware Supporter',
  top_contributor: 'Top Contributor',
}

export default function Badge({ type, size = 16 }) {
  const label = LABELS[type] ?? type
  return (
    <img
      src={`/badges/${type}.svg`}
      alt={label}
      title={label}
      width={size}
      height={size}
      className="inline-block shrink-0"
    />
  )
}
