<template>
	<GuestLayout>
		<div class="flex w-full justify-center p-8">
			<div class="flex w-full max-w-sm flex-col gap-6">
				<CapilogTitle class="text-4xl" />
				<CInput label="Usuario" />
				<CInput type="password" label="Contraseña" />
				<div class="flex justify-between gap-2">
					<router-link to="/" class="button btn-dark flex items-center gap-2 text-white">
						<ArrowCircleLeftIcon class="hidden h-6 sm:block" />
						Volver
					</router-link>
					<button @click="goToDashboard" class="button btn-primary whitespace-nowrap text-white">
						Iniciar sesión
					</button>
				</div>
			</div>
		</div>
	</GuestLayout>
</template>

<script>
import { ArrowCircleLeftIcon } from '@heroicons/vue/outline';
import CInput from '../components/inputs/CInput.vue';
import CapilogTitle from '../components/CapilogTitle.vue';
import { useRouter } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';

export default {
	components: { CapilogTitle, CInput, ArrowCircleLeftIcon, GuestLayout },
	setup() {
		const router = useRouter();

		const goToDashboard = () => {
			router.push('/home');
		};

		return { goToDashboard };
	},
};
</script>
