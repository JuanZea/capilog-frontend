import { render, screen } from '@testing-library/vue';
import Welcome from '../../src/views/Welcome.vue';

describe('Welcome test', () => {
	it('Is rendered correctly', () => {
		render(Welcome);

		screen.getByText('CAPI');
		screen.getByText('LOG');
		screen.getByText('Sistema de logística interna de envíos');
	});
});
