import axios from 'axios';

const authedAxios = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:3000/api'
    });
};

export default authedAxios;