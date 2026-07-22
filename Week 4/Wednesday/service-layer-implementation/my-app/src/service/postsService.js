import axiosClient from '../api/axiosClient';

function getAllPosts() {
    return axiosClient.get('/posts').then((res) => res.data);
}

export default getAllPosts;