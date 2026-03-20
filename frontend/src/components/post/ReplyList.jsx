import ReplyCard from './ReplyCard'

export default function ReplyList({ replies, users }) {
  if (!replies.length) {
    return (
      <div className="px-4 py-8 text-center text-content-3 text-sm">No replies yet.</div>
    )
  }

  return (
    <div>
      {replies.map(reply => (
        <ReplyCard key={reply.id} post={reply} user={users[reply.authorPubkey]} />
      ))}
    </div>
  )
}
