import axios from 'axios';
import { state } from '../store';

const URL = 'http://192.168.56.1:8000';
export const capilogApiInstance = axios.create({
	baseURL: URL,
	headers: { 'Content-Type': 'application/json' },
});

capilogApiInstance.interceptors.response.use(undefined, (error) => {
	if (!error.response) state.errors.server = true;
});

export const updateToken = (token: string) =>
	(capilogApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
