import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
