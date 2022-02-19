import { render, screen } from '@testing-library/vue';
import CInput from '../../../src/components/inputs/CInput.vue';

describe('Custom input test', () => {
	describe('Is rendered correctly', () => {
		it('Without props', () => {
			const { html } = render(CInput);
			expect(html()).toContain('type="text"');
		});

		it('sending id', () => {
			const { html } = render(CInput, {
				props: {
					id: 'test-input',
				},
			});

			expect(html()).toContain('id="test-input"');
		});

		it('sending label', () => {
			render(CInput, {
				props: {
					label: 'test label',
				},
			});

			screen.getByText('test label');
		});

		it('sending placeholder', () => {
			const { html } = render(CInput, {
				props: {
					placeholder: 'test placeholder',
				},
			});

			expect(html()).toContain('placeholder="test placeholder"');
		});
	});
});
