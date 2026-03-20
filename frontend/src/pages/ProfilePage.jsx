import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProfile } from '../hooks/useProfile'
import ProfileHeader from '../components/profile/ProfileHeader'
import Feed from '../components/feed/Feed'
import { mockUsers } from '../data/mock'

export default function ProfilePage() {
  const { pubkey } = useParams()
  const { user, posts, replies } = useProfile(pubkey)
  const [tab, setTab] = useState('posts')

  const users = Object.fromEntries(mockUsers.map(u => [u.pubkey, u]))
  const displayPosts = tab === 'posts' ? posts : replies

  return (
    <div className="max-w-feed mx-auto">
      <ProfileHeader user={user} />
      <div className="flex border-b border-border">
        {['posts', 'replies'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 text-sm font-medium capitalize transition-colors ${
              tab === t
                ? 'text-accent border-b-2 border-accent'
                : 'text-content-3 hover:text-content'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <Feed posts={displayPosts} users={users} />
    </div>
  )
}
