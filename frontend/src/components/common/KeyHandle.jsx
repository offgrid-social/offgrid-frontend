import { Link } from 'react-router-dom'

function truncateKey(pubkey) {
  if (!pubkey) return ''
  return pubkey.slice(0, 10) + '...' + pubkey.slice(-6)
}

export default function KeyHandle({ user, linkable = true }) {
  const pubkey = user?.pubkey ?? ''
  const content = (
    <span className="flex flex-col min-w-0">
      {user?.displayName && (
        <span className="font-semibold text-content text-sm leading-tight truncate">
          {user.displayName}
        </span>
      )}
      <span className="font-mono text-xs text-content-2 truncate">
        {truncateKey(pubkey)}
      </span>
    </span>
  )

  if (!linkable) return content

  return (
    <Link
      to={`/profile/${pubkey}`}
      className="min-w-0 hover:underline decoration-content-3"
    >
      {content}
    </Link>
  )
}
