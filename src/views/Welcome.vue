<script lang="ts" setup>
import GuestLayout from './layouts/GuestLayout.vue';
import CapilogTitle from '../components/CapilogTitle.vue';
import { UserCircleIcon } from '@heroicons/vue/outline';
</script>

<template>
	<GuestLayout>
		<div class="relative flex h-full w-full flex-col items-center justify-center">
			<div class="absolute top-4 right-4 flex justify-end gap-4 text-white">
				<router-link class="btn btn-primary flex items-center gap-2" to="/login">
					<UserCircleIcon class="h-6" />
					Iniciar Sesión
				</router-link>
			</div>
			<CapilogTitle class="text-6xl lg:text-8xl" animated />
			<div class="flex flex-col text-center font-bold text-gray-400 lg:text-2xl">
				<span>Sistema de logística interna de envíos</span>
				<span>Flores El Capiro</span>
			</div>
		</div>
	</GuestLayout>
</template>
