import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PostProvider from '@/providers/post-provider';
import { fetchPosts } from '@/hooks/fetchPosts';
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog app',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  const posts = await fetchPosts();

  return (
    <html lang="en">
      <body className={ inter.className }>
        <PostProvider posts={ posts }>{ children }</PostProvider>
      </body>
    </html>
  );
};

export default RootLayout;
