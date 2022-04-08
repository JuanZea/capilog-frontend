import { reactive } from 'vue';
import { State } from './store';

export const state: State = reactive({
	errors: {
		server: false,
	},
});
