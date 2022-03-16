import admin from './admin';
import supervisor from './supervisor';

import Home from '../../views/Home.vue';
import MyProfile from '../../views/MyProfile.vue';

export default [
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
	...supervisor,
];
