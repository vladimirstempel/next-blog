'use client';
import PostCard from '@/components/post';
import { FC } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { usePosts } from '@/hooks/usePosts';

const PostList: FC = () => {
  const posts = usePosts();
  const router = useRouter();

  const handleCreate = () => router.push('create');

  return (
    <div className="flex flex-wrap gap-4 justify-center m-8">
      { posts.map(post => (<PostCard key={ post.id } post={ post }/>)) }
      <Fab className="fixed bottom-12 right-12" color="primary" aria-label="add" onClick={ handleCreate }>
        <AddIcon/>
      </Fab>
    </div>
  );
};

export default PostList;