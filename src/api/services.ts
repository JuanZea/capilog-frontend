import axios from 'axios';

const URL = 'http://localhost:8000';

export const usersService = {
	index: () => axios.get(`${URL}/users`).then((response) => response.data),
	show: (dni: string) => axios.get(`${URL}/users/${dni}`).then((response) => response.data),
	destroy: (dni: string) => axios.delete(`${URL}/users/${dni}`).then((response) => response.data),
}
