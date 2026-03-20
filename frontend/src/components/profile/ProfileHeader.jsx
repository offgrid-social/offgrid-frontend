import Avatar from '../common/Avatar'
import BadgeList from '../common/BadgeList'

function truncateKey(pubkey) {
  if (!pubkey) return ''
  return pubkey.slice(0, 12) + '...' + pubkey.slice(-8)
}

export default function ProfileHeader({ user }) {
  if (!user) {
    return (
      <div className="px-4 py-8 text-center text-content-3 text-sm">User not found.</div>
    )
  }

  const joined = new Date(user.joinedAt).toLocaleDateString('en', {
    year: 'numeric', month: 'long',
  })

  return (
    <div className="px-4 py-5 border-b border-border">
      <div className="flex items-start gap-4">
        <Avatar user={user} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {user.displayName && (
              <h1 className="text-lg font-semibold text-content">{user.displayName}</h1>
            )}
            <BadgeList badges={user.badges} size={18} />
          </div>
          <p className="font-mono text-xs text-content-2 mt-0.5">{truncateKey(user.pubkey)}</p>
          {user.bio && (
            <p className="text-sm text-content mt-2 leading-relaxed">{user.bio}</p>
          )}
          <div className="flex items-center gap-4 mt-3 text-xs text-content-3">
            <span>
              <span className="text-content font-medium">{user.followersCount}</span> followers
            </span>
            <span>
              <span className="text-content font-medium">{user.followingCount}</span> following
            </span>
            <span>Joined {joined}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
