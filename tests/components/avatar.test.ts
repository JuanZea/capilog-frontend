import { render, screen } from '@testing-library/vue';

import Avatar from '../../src/components/Avatar.vue';

describe('Avatar test', () => {
	it('Is rendered correctly', () => {
		render(Avatar);

		screen.getByText('MC');
	});
});
