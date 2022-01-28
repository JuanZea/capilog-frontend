<template>
	<div :class="{ 'select-none font-bold': true, 'duration-100 hover:scale-125': animated }">
		<span class="text-gray-900">CAPI</span>
		<span class="text-capi">LOG</span>
	</div>
</template>

<script>
export default {
	props: { animated: { type: Boolean, default: false } },
};
</script>
