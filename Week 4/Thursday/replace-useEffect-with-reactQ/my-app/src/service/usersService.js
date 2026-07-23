import axiosClient from '../api/axiosClient';
import { ENDPOINTS } from '../api/endPoints';

const userService = {
    getAll: (limit) => {
        const params = limit ? {_limit: limit} : {};
        return axiosClient.get(ENDPOINTS.USERS, { params }).then((res) => res.data);
    },

    getById: (id) => {
        return axiosClient.get(`${ENDPOINTS.USERS}/${id}`).then((res) => [res.data]);
    }
}

export default userService;