'use client';
import { FC, useContext } from 'react';
import Post from '@/components/post';
import { PostsContext } from '@/providers/post-provider';
import Fab from '@mui/material/Fab';
import { useRouter } from 'next/navigation';
import { usePosts } from '@/hooks/usePosts';
import { usePost } from '@/hooks/usePost';

interface PostProps {
  params: { postId: string };
}

const PostPage: FC<PostProps> = ({ params }) => {
  const router = useRouter();
  const post = usePost(parseInt(params.postId));

  const handleBackRedirect = () => {
    router.push('/');
  };

  console.log(params, post);
  return (
    <div className="flex w-full h-screen justify-center items-center">
      { post ? <Post post={ post } isPage={ true }/> : 'Post not found' }
      <Fab
        className="fixed top-12 left-12"
        size="small"
        variant="extended"
        color="secondary"
        aria-label="Back to list"
        onClick={ handleBackRedirect }
      >
        Back to list
      </Fab>
    </div>
  );
};

export default PostPage;