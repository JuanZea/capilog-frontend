import { capilogApiInstance as service } from './instanceManager';

export const userService = {
	all: () => service.get(`users`),
	show: (dni: string) => service.get(`users/${dni}`).then((response) => response.data),
	create: (data: Object) => service.post(`users`, data).then((response) => response.data),
	destroy: (dni: string) => service.delete(`users/${dni}`).then((response) => response.data),
};
