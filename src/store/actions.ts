import router from '../router';
import { authService, farmService, userService } from '../services';
import { AuthResponse } from '../services/adapters/adapters';
import { updateToken } from '../services/instanceManager';
import { state } from './state';

let initialize: () => void;
export const initialized = new Promise((resolve) => (initialize = () => resolve(true)));

export const actions = {
	initialize: async () => {
		await rememberAuth();
		initialize();
		console.log('[capilog]: initialized');
	},
	login: (credentials: AuthResponse) => {
		state.user = credentials.user;
		updateToken(credentials.accessToken);
		localStorage.setItem('userId', credentials.user.dni);
		localStorage.setItem('authToken', credentials.accessToken);
		router.push({ name: 'home' });
	},
	logout: () => {
		authService.logout();
		localStorage.clear();
		delete state.user;
		router.push({ name: 'login' });
	},
	roles: {
		isAdmin: () => state.user?.role.role === 'ADMIN',
		isCoordinator: () => state.user?.role.role === 'COORDINADOR DE TRANSPORTE',
		isSupervisor: () => state.user?.role.role === 'SUPERVISOR DE FINCA',
		isDoorman: () => state.user?.role.role === 'PORTERO',
	},
};

const loadFarms = async () => {
	const response = await farmService.all();
	if (response.isAxiosError) console.error("[ERROR] Can't load farms");
	else state.farms = response;
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
