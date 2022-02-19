import { render, screen } from '@testing-library/vue';
import Topbar from '../../src/components/Topbar.vue';

describe('Topbar test', () => {
	it('Is rendered correctly', () => {
		render(Topbar);
	});
});
