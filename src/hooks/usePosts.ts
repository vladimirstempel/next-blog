import { useContext } from 'react';
import { PostsContext } from '@/providers/post-provider';

export const usePosts = () => useContext(PostsContext);