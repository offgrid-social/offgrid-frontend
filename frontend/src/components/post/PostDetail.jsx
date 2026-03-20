import Avatar from '../common/Avatar'
import KeyHandle from '../common/KeyHandle'
import Timestamp from '../common/Timestamp'
import BadgeList from '../common/BadgeList'
import GovernanceTag from '../common/GovernanceTag'
import PostActions from '../feed/PostActions'

export default function PostDetail({ post, user }) {
  return (
    <article className="border-b border-border">
      {post.isGovernance && <GovernanceTag />}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar user={user} size="md" />
          <KeyHandle user={user} />
          <BadgeList badges={user?.badges ?? []} size={16} />
        </div>
        <p className="text-base text-content leading-relaxed whitespace-pre-wrap break-words">
          {post.body}
        </p>
        <div className="mt-3 pt-3 border-t border-border">
          <Timestamp iso={post.createdAt} />
        </div>
        <PostActions post={post} />
      </div>
    </article>
  )
}
