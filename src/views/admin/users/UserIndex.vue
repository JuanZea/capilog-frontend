<template>
	<AuthLayout>
		<div class="bg-aztec flex h-full w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<div class="mb-4 flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">Usuarios</h1>
					<router-link :to="{ name: 'admin.users.create' }" class="button btn-primary gap-2 text-white"
						><PlusCircleIcon class="h-7" />Crear usuario</router-link
					>
				</div>
				<div class="flex justify-center">
					<div class="hidden lg:block"><UsersTable /></div>
				</div>
			</div>
		</div>
	</AuthLayout>
</template>

<script>
import { PlusCircleIcon } from '@heroicons/vue/outline';

import AuthLayout from '../../layouts/AuthLayout.vue';
import UsersTable from '../../../components/tables/UsersTable.vue';
export default {
	components: { AuthLayout, UsersTable, PlusCircleIcon },
};
</script>
