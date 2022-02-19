import { render, screen } from '@testing-library/vue';
import Error404 from '../../../src/views/errors/404.vue';

describe('Error Screen test', () => {
	it('Is rendered correctly', () => {
		render(Error404);

		screen.getByText('La pagina a la que intentas entrar no existe');
	});
});
