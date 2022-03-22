import admin from './admin';
import shipments from './shipments';
import Home from '../../views/Home.vue';
import MyProfile from '../../views/MyProfile.vue';
import { auth } from '../middlewares';

const routes = [
	{
		name: 'home',
		path: '/home',
		component: Home,
	},
	{
		name: 'myProfile',
		path: '/my-profile',
		component: MyProfile,
	},
	...admin,
	...shipments,
];

export default routes.map((route) => {
	return Object.assign(route, { beforeEnter: [auth] });
});
