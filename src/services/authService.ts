import { capilogApiInstance as service, updateToken } from './instanceManager';

export const authService = {
	login: (data: { dni: string; password: string }) => service.post(`auth/login`, data).then((response => {
		if (response.data.errors) return;
		updateToken(response.data.data[0].data.accessToken);
	})),
};
