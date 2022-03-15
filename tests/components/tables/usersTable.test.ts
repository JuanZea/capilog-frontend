import { render, screen } from '@testing-library/vue';
import UsersTable from '../../../src/components/tables/UsersTable.vue';

describe('Custom input test', () => {
	it('Is rendered correctly', () => {
		render(UsersTable);

		screen.getByText('Nombre');
		screen.getByText('Finca');
		screen.getByText('Rol');
	});
});
