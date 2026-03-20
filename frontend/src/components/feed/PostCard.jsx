import { Link } from 'react-router-dom'
import Avatar from '../common/Avatar'
import KeyHandle from '../common/KeyHandle'
import Timestamp from '../common/Timestamp'
import BadgeList from '../common/BadgeList'
import GovernanceTag from '../common/GovernanceTag'
import PostActions from './PostActions'

export default function PostCard({ post, user }) {
  return (
    <article className="border-b border-border hover:bg-surface-1 transition-colors">
      {post.isGovernance && <GovernanceTag />}
      <div className="flex gap-3 px-4 py-3">
        <Avatar user={user} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <KeyHandle user={user} />
              <BadgeList badges={user?.badges ?? []} size={14} />
            </div>
            <Link to={`/post/${post.id}`} className="shrink-0">
              <Timestamp iso={post.createdAt} />
            </Link>
          </div>
          <Link to={`/post/${post.id}`}>
            <p className="mt-1 text-sm text-content leading-relaxed whitespace-pre-wrap break-words">
              {post.body}
            </p>
          </Link>
          <PostActions post={post} />
        </div>
      </div>
    </article>
  )
}
