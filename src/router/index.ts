import { createRouter, createWebHistory } from 'vue-router';
import Error404 from '../views/errors/404.vue';
import auth from './routes/auth';
import guest from './routes/guest';

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
