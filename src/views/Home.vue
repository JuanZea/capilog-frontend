<template>
	<AuthLayout>
		<div class="flex w-full">
			<div>barra</div>
			<div class="flex-grow">tablero</div>
		</div>
	</AuthLayout>
</template>

<script>
import AuthLayout from './layouts/AuthLayout.vue';
export default {
	components: { AuthLayout },
};
</script>
