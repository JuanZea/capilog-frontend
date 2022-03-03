import UserIndex from '../../views/admin/users/UserIndex.vue';
import UserCreate from '../../views/admin/users/UserCreate.vue';
import UserShow from '../../views/admin/users/UserShow.vue';

export default [
	{
		name: 'admin.users.index',
		path: '/admin/users',
		component: UserIndex,
	},
	{
		name: 'admin.users.create',
		path: '/admin/users/create',
		component: UserCreate,
	},
	{
		name: 'admin.users.show',
		path: '/admin/users/:dni',
		component: UserShow,
	},
];
