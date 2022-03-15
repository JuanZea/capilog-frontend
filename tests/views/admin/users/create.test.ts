import { render, screen } from '@testing-library/vue';
import UserCreate from '../../../../src/views/admin/users/UserCreate.vue';

describe('Users create test', () => {
	it('Is rendered correctly', () => {
		render(UserCreate);

		screen.getByText('Crear Usuario');
	});
});
