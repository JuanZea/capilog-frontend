<script lang="ts" setup>
import GuestLayout from './layouts/GuestLayout.vue';
import CInput from '../components/inputs/CInput.vue';
import * as yupEs from '../lang/yupEs';
import Alert from '../components/Alert.vue';
import CapilogTitle from '../components/CapilogTitle.vue';
import { ref } from 'vue';
import { object, string, setLocale } from 'yup';
import { useRouter } from 'vue-router';
import { authService } from '../services';
import { useForm, useField } from 'vee-validate';
import { ArrowCircleLeftIcon } from '@heroicons/vue/outline';

setLocale(yupEs);

const router = useRouter();

interface LoginForm {
	dni: string;
	password: string;
}

const { meta, values, resetForm } = useForm<LoginForm>({
	validationSchema: object({
		dni: string().min(6).max(20).required().label('El documento'),
		password: string().min(8).max(256).required().label('La contraseña'),
	}),
	initialValues: {
		dni: '',
		password: '',
	},
});

const { errorMessage: dniError, value: dni } = useField<string>('dni');
const { errorMessage: passwordError, value: password } = useField<string>('password');

const invalidData = ref(false);

const login = async (event: Event) => {
	event.preventDefault();
	if (!meta.value.valid) return;

	authService
		.login(values)
		.then(() => router.push({ name: 'home' }))
		.catch(() => {
			invalidData.value = true;
			resetForm();
		});
};
</script>

<template>
	<GuestLayout>
		<div class="flex w-full justify-center p-8">
			<div class="w-full max-w-sm">
				<CapilogTitle class="mb-6 text-4xl" />
				<Alert v-if="invalidData && !meta.dirty" error text="Datos erróneos. Por favor, inténtelo otra vez." />
				<form class="flex flex-col gap-6">
					<CInput label="Documento" v-model="dni" :error="dniError" />
					<CInput type="password" label="Contraseña" v-model="password" :error="passwordError" />
					<div class="flex justify-between gap-2">
						<router-link to="/" class="btn btn-dark flex items-center gap-2 text-white">
							<ArrowCircleLeftIcon class="hidden h-6 sm:block" />
							Volver
						</router-link>
						<button
							@click="login"
							class="btn btn-primary whitespace-nowrap text-white"
							:class="{ 'btn-disabled': !meta.valid }"
							:disabled="!meta.valid"
						>
							Iniciar sesión
						</button>
					</div>
				</form>
			</div>
		</div>
	</GuestLayout>
</template>
