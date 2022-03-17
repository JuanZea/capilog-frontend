<script lang="ts" setup>
import Alert from '../Alert.vue';
defineProps<{
	id?: string;
	label?: string;
	placeholder?: string;
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
			<textarea
				:id="id"
				:name="id"
				:placeholder="placeholder"
				:value="modelValue"
				@change="updateModelValue"
				class="block w-full rounded-md shadow-sm sm:text-sm"
				:class="
					error
						? 'border-red-300 bg-red-100 focus:border-red-500 focus:ring-red-500'
						: 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
				"
			/>
			<Alert v-if="error" class="mt-1" :text="error" slim error />
		</div>
	</div>
</template>
