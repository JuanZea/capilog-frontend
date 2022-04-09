import { getFarmsFromFarmsResponse } from './adapters/farm';
import { capilogApiInstance as service } from './instanceManager';

export const farmService = {
	all: () => service.get('farms').then(getFarmsFromFarmsResponse),
	show: (dni: string) => service.get(`users/${dni}`),
	create: (data: Object) => service.post(`users`, data),
	destroy: (dni: string) => service.delete(`users/${dni}`).then((response) => response.data),
};
