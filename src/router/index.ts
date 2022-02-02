import { createRouter, createWebHistory } from 'vue-router';
// import guest from './routes/guest';
// import auth from './routes/auth';
import Error404 from '../views/errors/404.vue';
import guest from './routes/guest';

export const routes = [
	...guest,
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
