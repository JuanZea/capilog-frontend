import { render, screen } from '@testing-library/vue';
import NavMenu from '../../src/components/NavMenu.vue';

describe('NavMenu test', () => {
	it('Is rendered correctly', () => {
		render(NavMenu);

		screen.getByText('Revisar solicitudes');
		screen.getByText('Mi perfil');
	});
});
