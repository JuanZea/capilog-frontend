<template>
	<div>
		<label v-if="label" for="email" class="mb-1 block font-medium text-gray-700">{{ label }}</label>
		<div>
			<input
				:id="id"
				:type="type"
				class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
				:placeholder="placeholder"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: { type: String, default: null },
		label: { type: String, default: null },
		placeholder: { type: String, default: null },
		type: { type: String, default: 'text' },
	},
};
</script>
