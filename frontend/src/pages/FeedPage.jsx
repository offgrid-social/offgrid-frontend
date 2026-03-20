import { useFeed } from '../hooks/useFeed'
import Feed from '../components/feed/Feed'
import ComposePlaceholder from '../components/post/ComposePlaceholder'

export default function FeedPage() {
  const { posts, users } = useFeed()

  return (
    <div className="max-w-feed mx-auto">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="font-semibold text-content text-sm">Feed</h2>
      </div>
      <ComposePlaceholder placeholder="What's on your mind?" />
      <Feed posts={posts} users={users} />
    </div>
  )
}
