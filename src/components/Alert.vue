<script lang="ts" setup>
import { ExclamationIcon } from '@heroicons/vue/outline';
defineProps<{
	text: string;
	slim?: boolean;
}>();
</script>

<template>
	<div
		class="mb-2 flex gap-2 rounded border border-red-600 bg-red-50 bg-opacity-70 text-sm text-red-600"
		:class="slim ? 'px-2 py-1' : 'px-6 py-3'"
	>
		<ExclamationIcon class="h-5" />
		<span>{{ text }}</span>
	</div>
</template>
