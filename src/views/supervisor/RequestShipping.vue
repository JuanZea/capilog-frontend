<script lang="ts" setup>
import AuthLayout from '../layouts/AuthLayout.vue';
import RequestShippingForm from '../../components/forms/RequestShippingForm.vue';
</script>

<template>
	<AuthLayout>
		<div class="bg-aztec flex w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<div class="mb-4 flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">Solicitar Envío</h1>
				</div>
				<div class="flex justify-center">
					<RequestShippingForm />
				</div>
			</div>
		</div>
	</AuthLayout>
</template>
