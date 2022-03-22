import { actions, initialized, state } from '../store';

const isAuth = () => state.user;

export const initialize = async (to, from, next) => {
	await initialized;
	next();
};

export const auth = (to, from, next) => {
	if (isAuth()) next();
	else next({ name: 'login' });
};

export const guest = (to, from, next) => {
	if (!isAuth()) next();
	else next({ name: 'home' });
};

export const admin = (to, from, next) => {
	if (actions.roles.isAdmin()) next();
	else next({ name: 'home' });
};
