import { render, screen } from '@testing-library/vue';
import Login from '../../src/views/Login.vue';
import * as Router from 'vue-router';

describe('Login test', () => {
	it('Is rendered correctly', async () => {
		Object.defineProperty(Router, 'useRouter', {
			value: jest.fn(() => {
				return { push: () => {} };
			}),
		});

		render(Login);

		screen.getByText('Usuario');
		screen.getByText('Contraseña');
		screen.getByText('Volver');
		const button = screen.getByText('Iniciar sesión');

		await button.click();
	});
});
