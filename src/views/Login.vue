<template>
	<div class="flex h-full w-full">
		<div class="w-8 bg-capi" />
		<div class="flex flex-grow flex-col gap-6 p-8">
			<CapilogTitle class="text-4xl" />
			<CInput label="Usuario" />
			<CInput type="password" label="Contraseña" />
			<div class="flex justify-between">
				<router-link to="/" class="button btn-dark text-white">Volver</router-link>
				<button class="button btn-primary text-white">Iniciar sesión</button>
			</div>
		</div>
		<div class="w-8 bg-capi" />
	</div>
</template>

<script>
import CInput from '../components/inputs/CInput.vue';
import CapilogTitle from '../components/CapilogTitle.vue';

export default {
	components: { CapilogTitle, CInput },
};
</script>
