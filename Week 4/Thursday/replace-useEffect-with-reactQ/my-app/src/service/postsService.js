import axiosClient from '../api/axiosClient';
import { ENDPOINTS } from '../api/endPoints';

const postService = {
    getAll: (limit) => {
        const params = limit ? {_limit: limit} : {};
        return axiosClient.get(ENDPOINTS.POSTS, { params }).then((res) => res.data);
    },

    getById: (id) => {
        return axiosClient.get(`${ENDPOINTS.POSTS}/${id}`).then((res) => [res.data]);
    }
}

export default postService;