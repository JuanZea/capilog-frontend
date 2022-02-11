import { ref } from 'vue';

export const currentModal = ref();

export const openModal = (modal: string) => {
	window.addEventListener('resize', closeModal);
	currentModal.value = modal;
};

export const closeModal = () => {
	window.removeEventListener('resize', closeModal);
	currentModal.value = undefined;
};
