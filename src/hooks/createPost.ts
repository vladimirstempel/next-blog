import axios from 'axios';
import { API_URL } from '@/constants/api';
import { Post } from '@/interfaces/post';

export const createPost = async (body: Partial<Post>) =>
  await axios.post<Post>(`${ API_URL }/posts`, body)
    .then(response => response.data);