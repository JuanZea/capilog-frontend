import Welcome from '../../views/Welcome.vue';
import Login from '../../views/Login.vue';

export default [
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
