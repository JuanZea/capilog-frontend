<script setup lang="ts">
import Avatar from '../../../Avatar.vue';
import type { User } from '../../../../ts/types';
import OptionsDropdown from './OptionsDropdown.vue';
import { PencilAltIcon, TrashIcon, EyeIcon } from '@heroicons/vue/outline';
import { usersService } from '../../../../api/services';
defineProps<{
	user: User;
}>();

const destroy = (dni: string) => {
	usersService.destroy(dni);
};
</script>

<template>
	<div class="flex justify-between gap-6 rounded-xl bg-white px-6 py-3 shadow-md">
		<div class="flex items-center">
			<Avatar :name="user.name + ' ' + user.lastname" class="h-14 w-14 text-xl" />
			<div class="ml-3">
				<div class="text-sm font-medium text-gray-900">
					{{ `${user.name} ${user.lastname ?? ''}` }}
				</div>
				<div class="w-40 truncate whitespace-nowrap text-sm text-gray-500">
					{{ user.role.role }}
				</div>
				<div class="mt-1 text-sm text-gray-500">
					<span class="rounded bg-red-200 px-2 py-1 text-red-600">Bochica</span>
				</div>
			</div>
		</div>
		<div class="hidden items-center gap-4 lg:flex">
			<router-link
				:to="{ name: 'admin.users.show', params: { dni: user.dni } }"
				class="flex justify-center text-gray-700 hover:text-gray-900"
				><EyeIcon class="h-6 w-6"
			/></router-link>
			<a href="#" class="flex justify-center text-indigo-700 hover:text-indigo-900"
				><PencilAltIcon class="h-6 w-6"
			/></a>
			<button @click="destroy(user.dni)" class="text-red-700 hover:text-red-900">
				<TrashIcon class="h-6 w-6" />
			</button>
		</div>
		<div class="flex items-center lg:hidden">
			<OptionsDropdown :dni="user.dni" />
		</div>
	</div>
</template>
