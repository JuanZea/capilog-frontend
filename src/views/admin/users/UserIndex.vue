<script lang="ts" setup>
import AuthLayout from '../../layouts/AuthLayout.vue';
import UsersTable from '../../../components/tables/users/UsersTable.vue';
import { usersService } from '../../../api/services';
import { ref } from 'vue';
import Banner from '../../../components/Banner.vue';

const users = ref(null);

usersService.all().then((response) => {
	users.value = response.data.users;
});
</script>

<template>
	<AuthLayout>
		<div class="bg-aztec flex h-full w-full p-4 lg:p-8">
			<div class="w-full bg-gray-200 p-2">
				<div class="mb-4 flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">USUARIOS</h1>
				</div>
				<div class="flex justify-center">
					<UsersTable v-if="users" :users="users" />
					<Banner v-else />
				</div>
			</div>
		</div>
	</AuthLayout>
</template>
