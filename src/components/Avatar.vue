<template>
	<div class="flex items-center justify-center rounded-full bg-gray-700 font-bold text-white shadow">
		<span>{{ initials }}</span>
	</div>
</template>

<script>
import { getNameInitials } from '../helpers';
export default {
	props: { name: { type: String, required: true } },
	setup(props) {
		return { initials: getNameInitials(props.name) };
	},
};
</script>
