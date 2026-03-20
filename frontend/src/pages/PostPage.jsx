import { useParams, Link } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import PostDetail from '../components/post/PostDetail'
import ComposePlaceholder from '../components/post/ComposePlaceholder'
import ReplyList from '../components/post/ReplyList'

export default function PostPage() {
  const { id } = useParams()
  const { post, replies, users } = usePost(id)

  if (!post) {
    return (
      <div className="max-w-feed mx-auto px-4 py-12 text-center text-content-3 text-sm">
        Post not found.{' '}
        <Link to="/" className="text-accent hover:underline">Back to feed</Link>
      </div>
    )
  }

  return (
    <div className="max-w-feed mx-auto">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <Link to="/" className="text-content-3 hover:text-content text-sm">← Back</Link>
        <h2 className="font-semibold text-content text-sm">Post</h2>
      </div>
      <PostDetail post={post} user={users[post.authorPubkey]} />
      <ComposePlaceholder placeholder="Reply…" />
      <ReplyList replies={replies} users={users} />
    </div>
  )
}
