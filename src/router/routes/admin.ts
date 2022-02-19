import UsersIdex from '../../views/admin/users/UserIndex.vue';
import UserCreate from '../../views/admin/users/UserCreate.vue';

export default [
	{
		name: 'admin.users',
		path: '/admin/users',
		component: UsersIdex,
	},
	{
		name: 'admin.users.create',
		path: '/admin/users/create',
		component: UserCreate,
	},
];
