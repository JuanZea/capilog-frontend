import axios from 'axios';

const URL = 'http://localhost:8000';

export const getUsers = () => axios.get(`${URL}/users`).then((response) => response.data);
