'use client';
import { FC } from 'react';
import { Button, CardHeader, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { createPost } from '@/hooks/createPost';
import { Post } from '@/interfaces/post';
import { useRouter } from 'next/navigation';
import { usePosts } from '@/hooks/usePosts';

interface CreateProps {
}

const Page: FC<CreateProps> = () => {
  const router = useRouter();
  const posts = usePosts();

  const handleSubmit = async (formData: FormData) => {
    const newPost = {
      title: formData.get('title'),
      body: formData.get('body')
    } as Post;

    const post = await createPost(newPost);
    posts.push(post);

    router.push('/');
  };

  return (
    <Card className="flex m-8 justify-center">
      <form className="w-full max-w-lg m-6" action={ handleSubmit }>
        <CardHeader title="Create post"/>
        <CardContent className="flex flex-col gap-4">
          <TextField variant="outlined" label="Title" placeholder="Enter title" name="title"/>
          <TextField
            variant="outlined"
            label="Text"
            placeholder="Enter post text"
            name="body"
            multiline={ true }
            rows={ 4 }
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">Create post</Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Page;