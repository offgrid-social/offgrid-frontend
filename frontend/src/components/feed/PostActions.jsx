export default function PostActions({ post }) {
  return (
    <div className="flex items-center gap-5 mt-3 text-content-3 text-sm">
      <button className="flex items-center gap-1.5 hover:text-accent transition-colors" aria-label="Reply">
        <span>↩</span>
        <span>{post.replyCount}</span>
      </button>
      <button className="flex items-center gap-1.5 hover:text-accent transition-colors" aria-label="Boost">
        <span>⇄</span>
        <span>{post.boostCount}</span>
      </button>
      <button className="flex items-center gap-1.5 hover:text-accent transition-colors" aria-label="React">
        <span>+</span>
        <span>{post.reactionCount}</span>
      </button>
    </div>
  )
}
