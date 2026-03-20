import { mockPosts, mockUsers } from '../data/mock.js'

export function usePost(id) {
  const post = mockPosts.find(p => p.id === id) ?? null
  const replies = mockPosts.filter(p => p.parentId === id)
  const users = Object.fromEntries(mockUsers.map(u => [u.pubkey, u]))
  return { post, replies, users, loading: false, error: null }
}
