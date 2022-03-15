<template>
	<fieldset>
		<div class="relative">
			<div class="absolute -top-3 left-3 bg-gray-200 px-2 font-medium text-gray-500">
				<legend>{{ label }}</legend>
			</div>
			<div class="mt-2 rounded border-2 border-gray-400 px-4 pb-1 pt-3 shadow-lg">
				<slot />
			</div>
		</div>
	</fieldset>
</template>

<script>
export default {
	props: { label: { type: String, required: true } },
};
</script>
