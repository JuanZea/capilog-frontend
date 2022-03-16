<script lang="ts" setup>
defineProps<{
	id?: string;
	label?: string;
	type?: string;
	error?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (event: any) => {
	emit('update:modelValue', event.target.value);
};
</script>

<template>
	<div>
		<label
			v-if="label"
			for="email"
			class="mb-1 block font-medium"
			:class="error ? 'text-red-700' : 'text-gray-700'"
			>{{ label }}</label
		>
		<div class="flex flex-col">
			<input :id="id" :name="id" :type="type ?? 'date'" class="block w-full rounded-md shadow-sm sm:text-sm" />
		</div>
	</div>
</template>
