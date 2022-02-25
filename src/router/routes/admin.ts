import UsersIndex from '../../views/admin/users/UsersIndex.vue';
import UsersCreate from '../../views/admin/users/UsersCreate.vue';
import UsersShow from '../../views/admin/users/UsersShow.vue';

export default [
	{
		name: 'admin.users.index',
		path: '/admin/users',
		component: UsersIndex,
	},
	{
		name: 'admin.users.create',
		path: '/admin/users/create',
		component: UsersCreate,
	},
	{
		name: 'admin.users.show',
		path: '/admin/users/:dni',
		component: UsersShow,
	},
];
