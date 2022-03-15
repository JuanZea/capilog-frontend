<script lang="ts" setup>
defineProps({ animated: { type: Boolean, default: false }, clear: { type: Boolean, default: false } });
</script>

<template>
	<div :class="{ 'select-none font-bold': true, 'duration-100 hover:scale-75 lg:hover:scale-125': animated }">
		<span :class="clear ? 'text-white' : 'text-gray-800'">CAPI</span>
		<span class="text-capi">LOG</span>
	</div>
</template>
