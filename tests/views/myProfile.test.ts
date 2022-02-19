import { render, screen } from '@testing-library/vue';
import MyProfile from '../../src/views/MyProfile.vue';

describe('My profile test', () => {
	it('Is rendered correctly', () => {
		render(MyProfile);

		screen.getByText('Mi Perfil');
	});
});
