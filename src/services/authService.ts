import { state } from '../store';
import { capilogApiInstance as service, updateToken } from './instanceManager';

export const authService = {
	login: (data: { dni: string; password: string }) =>
		service.post('auth/login', data).then((response) => {
			if (response.data.errors) return;
			state.user = response.data.data.user;
			updateToken(response.data.data.accessToken);
			localStorage.setItem('authToken', response.data.data.accessToken);
		}),
	logout: () => service.post('auth/logout'),
};
