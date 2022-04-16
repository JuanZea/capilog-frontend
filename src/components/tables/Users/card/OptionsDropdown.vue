<script lang="ts" setup>
import { userService } from '@/services';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { PencilAltIcon, TrashIcon, EyeIcon } from '@heroicons/vue/outline';
import { DotsVerticalIcon } from '@heroicons/vue/outline';

defineProps<{
	dni: string;
}>();

const destroy = (dni: string) => {
	userService.destroy(dni);
	window.location.reload();
};
</script>

<template>
	<Menu as="div" class="relative inline-block text-left">
		<div>
			<MenuButton
				class="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
			>
				<DotsVerticalIcon class="h-6 text-gray-500" />
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems
				class="absolute right-0 z-10 mt-2 flex w-36 origin-top-right justify-between rounded-md bg-white px-2 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			>
				<MenuItem>
					<router-link
						:to="{ name: 'users.show', params: { dni: dni } }"
						class="flex justify-center text-gray-700 hover:text-gray-900"
					>
						<EyeIcon class="h-6 w-6" />
					</router-link>
				</MenuItem>
				<!-- <MenuItem>
					<a href="#" class="flex justify-center text-indigo-700 hover:text-indigo-900"
						><PencilAltIcon class="h-6 w-6"
					/></a>
				</MenuItem> -->
				<MenuItem>
					<button @click="destroy(dni)" class="text-red-700 hover:text-red-900">
						<TrashIcon class="h-6 w-6" />
					</button>
				</MenuItem>
			</MenuItems>
		</transition>
	</Menu>
</template>
