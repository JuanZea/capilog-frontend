import UserIndex from '../../views/users/UserIndex.vue';
import UserCreate from '../../views/users/UserCreate.vue';
import UserShow from '../../views/users/UserShow.vue';

export default [
	{
		name: 'users.index',
		path: '/users',
		component: UserIndex,
	},
	{
		name: 'users.create',
		path: '/users/create',
		component: UserCreate,
	},
	{
		name: 'users.show',
		path: '/users/:dni',
		component: UserShow,
	},
];
