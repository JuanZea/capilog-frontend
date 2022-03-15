import { createRouter, createWebHistory } from 'vue-router';

import auth from './routes/auth';
import guest from './routes/guest';
import Error404 from '../views/errors/404.vue';

export const routes = [
	...guest,
	...auth,
	{
		name: '404',
		path: '/:catchAll(.*)',
		component: Error404,
	},
];

const router = createRouter({
	routes: routes,
	history: createWebHistory(),
});

export default router;
