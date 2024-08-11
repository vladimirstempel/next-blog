'use client';

import { createContext, FC, ReactNode } from 'react';
import { Post } from '@/interfaces/post';

export const PostsContext = createContext<Post[]>([]);

interface PostProviderProps {
  children: ReactNode,
  posts: Post[]
}

const PostProvider: FC<PostProviderProps> = ({ children, posts }) => {
  return <PostsContext.Provider value={ posts }>{ children }</PostsContext.Provider>;
};

export default PostProvider;