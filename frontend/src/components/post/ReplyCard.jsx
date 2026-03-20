import Avatar from '../common/Avatar'
import KeyHandle from '../common/KeyHandle'
import Timestamp from '../common/Timestamp'
import BadgeList from '../common/BadgeList'
import PostActions from '../feed/PostActions'

export default function ReplyCard({ post, user }) {
  return (
    <article className="flex gap-3 px-4 py-3 border-b border-border">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <Avatar user={user} size="sm" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <KeyHandle user={user} />
          <BadgeList badges={user?.badges ?? []} size={13} />
          <Timestamp iso={post.createdAt} />
        </div>
        <p className="mt-1 text-sm text-content leading-relaxed whitespace-pre-wrap break-words">
          {post.body}
        </p>
        <PostActions post={post} />
      </div>
    </article>
  )
}
