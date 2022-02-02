<template>
	<div class="relative flex h-full w-full flex-col items-center justify-center text-8xl">
		<div class="absolute top-4 right-4 flex justify-end gap-4 text-white">
			<router-link class="button btn-primary flex items-center gap-2" to="/login">
				<UserCircleIcon class="h-6" />
				Iniciar Sesión
			</router-link>
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
import { UserCircleIcon } from '@heroicons/vue/outline';

export default {
	components: { CapilogTitle, UserCircleIcon },
};
</script>
