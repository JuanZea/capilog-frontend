<template>
	<button
		v-if="component"
		class="slec absolute z-40 flex h-screen w-screen bg-black bg-opacity-25"
		@click="closeModal"
	>
		<div class="flex w-full flex-col">
			<Component :is="component" />
		</div>
	</button>
</template>

<script>
import Topbar from '../Topbar.vue';
import { currentModal, closeModal } from '../../ts/modals';
export default {
	components: { Topbar },
	setup() {
		return { component: currentModal, closeModal };
	},
};
</script>
