<template>
	<AuthLayout>
		<div class="bg-aztec flex h-full w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<div class="mb-4 flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">Crear Usuario</h1>
				</div>
				<div class="flex justify-center">
					<UserCreateForm />
				</div>
			</div>
		</div>
	</AuthLayout>
</template>

<script>
import { PlusCircleIcon } from '@heroicons/vue/outline';

import AuthLayout from '../../layouts/AuthLayout.vue';
import UserCreateForm from '../../../components/forms/UserCreateForm.vue';
export default {
	components: { AuthLayout, UserCreateForm, PlusCircleIcon },
};
</script>
