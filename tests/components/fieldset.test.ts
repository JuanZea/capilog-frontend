import { render, screen } from '@testing-library/vue';

import Fieldset from '../../src/components/Fieldset.vue';

describe('Fieldset test', () => {
	it('Is rendered correctly', () => {
		render(Fieldset, { props: { label: 'Test label' } });

		screen.getByText('Test label');
	});
});
