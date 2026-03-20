import { mockPosts, mockUsers } from '../data/mock.js'

export function useProfile(pubkey) {
  const user = mockUsers.find(u => u.pubkey === pubkey) ?? null
  const posts = mockPosts.filter(p => p.authorPubkey === pubkey && p.parentId === null)
  const replies = mockPosts.filter(p => p.authorPubkey === pubkey && p.parentId !== null)
  return { user, posts, replies, loading: false, error: null }
}
