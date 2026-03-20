import { mockPosts, mockUsers } from '../data/mock.js'

export function useFeed() {
  const posts = mockPosts.filter(p => p.parentId === null)
  const users = Object.fromEntries(mockUsers.map(u => [u.pubkey, u]))
  return { posts, users, loading: false, error: null }
}
