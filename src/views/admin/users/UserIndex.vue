<script lang="ts" setup>
import Banner from '../../../components/Banner.vue';
import AuthLayout from '../../layouts/AuthLayout.vue';
import UsersTable from '../../../components/tables/users/UsersTable.vue';
import { ref } from 'vue';
import { userService } from '../../../services';
import { PlusCircleIcon } from '@heroicons/vue/outline';

const users = ref(null);

userService.all().then((response) => {
	users.value = response.data.data[0].users;
});
</script>

<template>
	<AuthLayout>
		<div class="bg-aztec flex w-full p-4 lg:p-8">
			<div class="w-full bg-gray-200 p-2">
				<div class="flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">USUARIOS</h1>
				</div>
				<div class="my-2 flex justify-center">
					<router-link :to="{name: 'admin.users.create'}" class="btn btn-primary flex items-center gap-2 text-white">
						<PlusCircleIcon class="h-5" />
						<span>Crear</span>
					</router-link>
				</div>
				<div class="flex justify-center">
					<UsersTable v-if="users" :users="users" />
					<Banner v-else />
				</div>
			</div>
		</div>
	</AuthLayout>
</template>
