<template>
	<div class="flex items-center justify-center rounded-full bg-gray-700 font-bold text-white shadow">
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
