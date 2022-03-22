import router from '../router';
import { authService, userService } from '../services';
import { updateToken } from '../services/instanceManager';
import { state } from './state';

let initialize: () => void;
export const initialized = new Promise((resolve) => (initialize = () => resolve(true)));

export const actions = {
	initialize: async () => {
		await rememberAuth();
		initialize();
		console.log('INI', state);
	},
	logout: () => {
		authService.logout();
		localStorage.clear();
		router.push({ name: 'login' });
	},
	roles: {
		isAdmin: () => state.user?.role.role === 'ADMIN',
	},
};

const rememberAuth = async () => {
	const token = localStorage.getItem('authToken');
	const userId = localStorage.getItem('userId');
	if (!token || !userId) return;
	updateToken(token);
	const response = await authService.refresh().catch((error) => error);
	if (response.response) localStorage.clear();
	else {
		localStorage.setItem('authToken', response.data.data.accessToken);
		updateToken(response.data.data.accessToken);
		state.user = (await userService.show(userId)).data.data;
	}
};
