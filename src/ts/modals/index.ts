import { shallowRef } from 'vue';

export const currentModal = shallowRef();

export const openModal = (modal: any) => {
	window.addEventListener('resize', closeModal);
	currentModal.value = modal;
};

export const closeModal = () => {
	window.removeEventListener('resize', closeModal);
	currentModal.value = undefined;
};
