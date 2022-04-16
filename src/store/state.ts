import { reactive } from 'vue';
import { State } from '../types/state';

export const state: State = reactive({
	errors: {
		server: false,
	},
});
