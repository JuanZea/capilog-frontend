<template>
	<div class="relative flex h-full w-full flex-col items-center justify-center text-8xl">
		<div class="absolute top-4 right-4 flex justify-end gap-4 text-white">
			<router-link class="button btn-primary" to="/login">Iniciar Sesión</router-link>
			<router-link class="button btn-primary" to="/register">Registrarse</router-link>
		</div>
		<CapilogTitle animated />
		<div class="flex flex-col text-center text-2xl font-bold text-gray-400">
			<span>Sistema de logística interna de envíos</span>
			<span>Flores El Capiro</span>
		</div>
	</div>
</template>

<script>
import CapilogTitle from '../components/CapilogTitle.vue';

export default {
	components: { CapilogTitle },
};
</script>
