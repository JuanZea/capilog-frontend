import { render, screen } from '@testing-library/vue';
import Home from '../../src/views/Home.vue';

describe('Home test', () => {
	it('Is rendered correctly', () => {
		render(Home);
	});
});
