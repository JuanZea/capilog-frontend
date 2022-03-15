<script lang="ts" setup>
import NavMenu from '../../components/NavMenu.vue';
import { MODALS } from '../../constants';
import { openModal } from '../../ts/modals';
import { ArrowSmDownIcon } from '@heroicons/vue/outline';
const open = () => openModal(MODALS.TOPBAR);
</script>

<template>
	<div class="flex min-h-screen min-w-screen flex-col bg-gray-200 lg:flex-row">
		<button @click="open" class="flex h-7 justify-center bg-gray-700 p-2 lg:hidden">
			<div class="absolute rounded-full border-2 border-white bg-gray-700">
				<ArrowSmDownIcon class="h-7 w-7 text-white" />
			</div>
		</button>
		<NavMenu class="hidden lg:flex" />
		<div class="flex flex-grow">
			<slot />
		</div>
	</div>
</template>
