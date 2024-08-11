import { usePosts } from '@/hooks/usePosts';

export const usePost = (postId: number) => usePosts()
  .find(post => post.id === postId) || null;