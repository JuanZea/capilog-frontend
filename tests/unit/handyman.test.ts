import { getNameInitials } from '../../src/helpers/handyman';

describe('Handyman tests', () => {
	it('Can get name initials', () => {
		const nameA = 'John Doe';
		const nameB = 'Melanie Sofia Córdoba Asprilla';
		const nameC = 'Pepe';

		expect(getNameInitials(nameA)).toEqual('JD');
		expect(getNameInitials(nameB)).toEqual('MC');
		expect(getNameInitials(nameC)).toEqual('P');
	});
});
