import { MODALS } from '../../src/ts/constants';
import { currentModal, openModal, closeModal } from '../../src/ts/modals';

describe('Modals test', () => {
	it('Current modal starts undefined', () => {
		expect(currentModal.value).toBeUndefined();
	});

	it('A modal can be opened', () => {
		openModal(MODALS.TOPBAR);

		expect(currentModal.value).toEqual(MODALS.TOPBAR);
	});

	it('A modal can be closed', () => {
		closeModal();

		expect(currentModal.value).toBeUndefined();
	});
});
