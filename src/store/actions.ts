import router from '../router';
import { authService } from '../services';
import { updateToken } from '../services/instanceManager';

export const actions = {
	initialize: () => {
		syncToken();
	},
	logout: () => {
		authService.logout();
		localStorage.removeItem('authToken');
		router.push({ name: 'welcome' });
	},
};

const syncToken = () => {
	const token = localStorage.getItem('authToken');
	// TODO: verify valid token
	if (token) updateToken(token);
};
