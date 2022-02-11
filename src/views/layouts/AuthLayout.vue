<template>
	<div class="flex h-screen w-screen flex-col bg-gray-200 lg:flex-row">
		<div @click="open" class="flex h-7 justify-center bg-gray-700 p-2 lg:hidden">
			<div class="absolute rounded-full border-2 border-white bg-gray-700">
				<ArrowSmDownIcon class="h-7 w-7 text-white" />
			</div>
		</div>
		<NavMenu class="hidden lg:flex" />
		<slot />
	</div>
</template>

<script>
import NavMenu from '../../components/NavMenu.vue';
import CapilogTitle from '../../components/CapilogTitle.vue';
import { modals } from '../../ts/constants';
import { openModal } from '../../ts/modals';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon } from '@heroicons/vue/outline';
export default {
	components: { CapilogTitle, NavMenu, TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon },
	setup() {
		const open = () => openModal(modals.TOPBAR);

		return { open };
	},
};
</script>
