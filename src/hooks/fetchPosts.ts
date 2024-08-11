import axios from 'axios';
import { API_URL } from '@/constants/api';
import { Post } from '@/interfaces/post';

export const fetchPosts = async () => await axios.get<Post[]>(`${ API_URL }/posts`)
  .then(response => response.data);