import { render, screen } from '@testing-library/vue';
import UserIndex from '../../../../src/views/admin/users/UserIndex.vue';

describe('User index', () => {
	it('Is rendered correctly', () => {
		render(UserIndex);

		screen.getByText('Usuarios');
		screen.getByText('Crear usuario');
	});
});
