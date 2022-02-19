<template>
	<div
		class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-700 text-3xl font-bold text-white shadow"
	>
		<span>{{ initials }}</span>
	</div>
</template>

<script>
import { state } from '../store';
import { getNameInitials } from '../helpers';
export default {
	setup() {
		return { initials: getNameInitials(state.user.name) };
	},
};
</script>
