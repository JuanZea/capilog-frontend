<script lang="ts" setup>
import Alert from '../Alert.vue';
defineProps<{
	id?: string;
	label?: string;
	placeholder?: string;
	type?: string;
	modelValue?: string;
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
			<select
				:id="id"
				:name="id"
				:value="modelValue"
				@change="updateModelValue"
				class="block w-full rounded-md border bg-white py-2 px-3 shadow-sm focus:outline-none sm:text-sm"
				:class="
					error
						? 'border-red-300 focus:border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
				"
			>
				<slot />
			</select>
			<Alert v-if="error" class="mt-1" :text="error" slim />
		</div>
	</div>
</template>

/* class="block w-full rounded-md shadow-sm sm:text-sm" :class="error ? 'border-red-300 focus:border-red-500
focus:ring-red-500 bg-red-100' : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'" */
