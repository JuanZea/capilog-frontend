<template>
	<div class="flex h-full w-screen flex-col bg-gray-200 lg:h-screen lg:flex-row">
		<button @click="open" class="flex h-7 justify-center bg-gray-700 p-2 lg:hidden">
			<div class="absolute rounded-full border-2 border-white bg-gray-700">
				<ArrowSmDownIcon class="h-7 w-7 text-white" />
			</div>
		</button>
		<NavMenu class="hidden lg:flex" />
		<slot />
	</div>
</template>

<script>
import { MODALS } from '../../constants';
import { openModal } from '../../ts/modals';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon } from '@heroicons/vue/outline';

import NavMenu from '../../components/NavMenu.vue';
import CapilogTitle from '../../components/CapilogTitle.vue';
export default {
	components: { CapilogTitle, NavMenu, TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon },
	setup() {
		const open = () => openModal(MODALS.TOPBAR);
		return { open };
	},
};
</script>
