<script setup lang="ts">
import { User } from '@/types/models';
import UserCard from './card/UserCard.vue';

defineProps<{
	users: Array<User>;
}>();
</script>

<template>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="flex flex-col gap-1">
					<UserCard v-for="user in users" :user="user" />
				</div>
			</div>
		</div>
	</div>
</template>
