import PostCard from './PostCard'

export default function Feed({ posts, users }) {
  if (!posts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-content-3 text-sm gap-2">
        <span className="text-3xl">◎</span>
        <span>Nothing here yet.</span>
      </div>
    )
  }

  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          user={users[post.authorPubkey]}
        />
      ))}
    </div>
  )
}
