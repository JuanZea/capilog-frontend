import { render, screen } from '@testing-library/vue';
import UserCreateForm from '../../../src/components/forms/UserCreateForm.vue';

describe('Custom input test', () => {
	it('Is rendered correctly', () => {
		render(UserCreateForm);

		screen.getByText('Nombre');
		screen.getByText('Correo electrónico');
		screen.getByText('Tipo de documento');
		screen.getByText('Documento');
		screen.getByText('Telefono');
		screen.getByText('Finca');
		screen.getByText('Rol');
		screen.getByText('Crear');
	});
});
