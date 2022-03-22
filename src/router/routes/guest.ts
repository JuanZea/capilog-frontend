import Welcome from '../../views/Welcome.vue';
import Login from '../../views/Login.vue';
import { guest } from '../middlewares';

const routes = [
	{
		name: 'welcome',
		path: '/',
		component: Welcome,
	},
	{
		name: 'login',
		path: '/login',
		component: Login,
	},
];

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [guest] });
});
