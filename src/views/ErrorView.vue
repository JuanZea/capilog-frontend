<script setup lang="ts">
import { computed } from 'vue';
import { state } from '../store';
const hasError = computed(() => state.errors.server);
const reset = () => (window.location.href = '/');
</script>

<template>
	<div
		v-if="hasError"
		class="bg-scrap fixed z-50 flex h-screen w-screen flex-col items-center justify-center bg-gray-100"
	>
		<h1 class="text-2xl font-medium">Error de conexión con el servidor</h1>
		<div class="flex justify-center">
			<img class="w-96" src="/src/assets/illustrations/serverError.svg" alt="Error server image" />
		</div>
		<button @click="reset" class="btn btn-primary mt-4 text-white">Volver al inicio</button>
	</div>
</template>
