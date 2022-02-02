import Layout from '../../views/layouts/GuestLayout.vue';
import Welcome from '../../views/Welcome.vue';
import Login from '../../views/Login.vue';

const children = [
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

export default [
	{
		path: '/',
		component: Layout,
		redirect: { name: 'welcome' },
		children: children,
	},
];
