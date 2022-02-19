import { render, screen } from '@testing-library/vue';
import CapilogTitle from '../../src/components/CapilogTitle.vue';

describe('Capilog title test', () => {
	it('Is rendered correctly', () => {
		render(CapilogTitle);

		screen.getByText('CAPI');
		screen.getByText('LOG');
	});
});
