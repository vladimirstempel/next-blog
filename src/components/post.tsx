import { FC } from 'react';
import { Post } from '@/interfaces/post';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { CardHeader } from '@mui/material';

interface PostProps {
  post: Post,
  isPage?: boolean
}

const PostCard: FC<PostProps> = ({ post, isPage }) => {
  return <Card className="w-full max-w-lg">
    <CardHeader title={ post.title }/>
    <CardContent>
      <Typography variant="body2">
        { post.body }
      </Typography>
    </CardContent>
    {
      !isPage
        ? <CardActions>
          <Link href={ `posts/${ post.id.toString() }` }>Learn More</Link>
        </CardActions> : ''
    }
  </Card>;
};

export default PostCard;