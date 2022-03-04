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
		<label v-if="label" for="email" class="mb-1 block font-medium" :class="error ? 'text-red-700' : 'text-gray-700'">{{ label }}</label>
		<div class="flex flex-col">
			<input
				:id="id"
				:name="id"
				:type="type ?? 'text'"
				:placeholder="placeholder"
				:value="modelValue"
				@input="updateModelValue"
				class="block w-full rounded-md shadow-sm sm:text-sm"
				:class="error ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-100' : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'"
			/>
			<Alert v-if="error" class="mt-1" :text="error" slim />
				<!-- <span v-if="error" class="text-sm text-red-600 bg-red-50 bg-opacity-70 px-2 py-1 border rounded mt-1 border-red-600">{{ error }}</span> -->
		</div>
	</div>
</template>
