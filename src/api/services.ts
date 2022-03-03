import axios from 'axios';

const URL = 'http://localhost:8000';

export const usersService = {
	all: () => axios.get(`${URL}/users`),
	show: (dni: string) => axios.get(`${URL}/users/${dni}`).then((response) => response.data),
	create: (data: Object) => axios.post(`${URL}/users`, data).then((response) => response.data),
	destroy: (dni: string) => axios.delete(`${URL}/users/${dni}`).then((response) => response.data),
};
