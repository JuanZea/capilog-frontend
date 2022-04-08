import { reactive } from 'vue';

export const state = reactive({
	user: null,
	errors: {
		server: false,
	},
});
