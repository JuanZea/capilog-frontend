import { render, screen } from '@testing-library/vue';
import AuthLayout from '../../../src/views/layouts/AuthLayout.vue';

describe('Auth layout test', () => {
	it('Is rendered correctly', async () => {
		render(AuthLayout);

		const button = screen.getAllByRole('button')[0];
		await button.click();
	});
});
