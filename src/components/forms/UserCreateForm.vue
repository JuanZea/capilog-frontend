<script lang="ts" setup>
import * as yupEs from '../../lang/yupEs';
import CInput from '../inputs/CInput.vue';
import { userService } from '../../services';
import { PlusCircleIcon } from '@heroicons/vue/outline';
import { useField, useForm } from 'vee-validate';
import { setLocale, object, string } from 'yup';
import CSelect from '../inputs/CSelect.vue';
import { ref } from 'vue';
import Alert from '../Alert.vue';

setLocale(yupEs);
const created = ref(false);

const { resetForm, handleSubmit } = useForm<any>({
	validationSchema: object({
		name: string().min(2).max(20).required().label('El nombre'),
		lastName: string().min(2).max(20).required().label('El apellido'),
		email: string().email().required().label('El correo electrónico'),
		dni: string().min(6).max(20).required().label('El documento'),
		phone: string().min(10).max(15).required().label('El telefono'),
		password: string().min(8).max(256).required().label('La contraseña'),
		passwordConfirm: string().min(8).max(256).required().label('La confirmación de contraseña'),
	}),
});

const { errorMessage: nameError, value: name } = useField<string>('name');
const { errorMessage: lastNameError, value: lastName } = useField<string>('lastName');
const { errorMessage: emailError, value: email } = useField<string>('email');
const { errorMessage: dniError, value: dni } = useField<string>('dni');
const { errorMessage: roleError, value: role } = useField<string>('role');
const { errorMessage: farmError, value: farm } = useField<string>('farm');
const { errorMessage: phoneError, value: phone } = useField<string>('phone');
const { errorMessage: passwordError, value: password } = useField<string>('password');
const { errorMessage: passwordConfirmError, value: passwordConfirm } = useField<string>('passwordConfirm');

const onSubmit = handleSubmit((values) => {
	const modValues = values;
	modValues.lastname = modValues.lastName;
	delete modValues.passwordConfirm;
	delete modValues.lastName;
	userService.create(modValues).then(() => {
		resetForm();
		created.value = true;
	});
});
</script>

<template>
	<form id="createUserForm" method="POST" @submit="onSubmit" class="w-full max-w-3xl">
		<Alert v-if="created" text="Usuario creado exitosamente" />
		<div class="w-full overflow-hidden shadow sm:rounded-md">
			<div class="bg-gray-100 px-4 py-5 sm:p-6">
				<div class="grid grid-cols-6 gap-6">
					<div class="col-span-6 sm:col-span-3">
						<CInput id="name" label="Nombre" v-model="name" :error="nameError" />
					</div>
					<div class="col-span-6 sm:col-span-3">
						<CInput id="lastname" label="Apellido" v-model="lastName" :error="lastNameError" />
					</div>
					<div class="col-span-6 sm:col-span-3">
						<CInput id="email" label="Correo electrónico" v-model="email" :error="emailError" />
					</div>

					<div class="col-span-6 sm:col-span-3">
						<CSelect id="dniType" label="Tipo de documento">
							<option value="CC">Cédula de ciudadanía</option>
							<option value="CE">Cédula de extrangería</option>
						</CSelect>
					</div>

					<div class="col-span-6 sm:col-span-3">
						<CInput id="document" label="Documento" v-model="dni" :error="dniError" />
					</div>

					<div class="col-span-6 sm:col-span-3">
						<CInput id="phone" label="Telefono" v-model="phone" :error="phoneError" />
					</div>
					<div class="col-span-6 sm:col-span-3">
						<CSelect id="farm" label="Finca" v-model="farm" :error="farmError">
							<option value="ALHAMBRA">Alhambra</option>
							<option value="BOUQUETERA">Bouquetera</option>
							<option value="BOCHICA">Bochica</option>
							<option value="LA CEJA">La ceja</option>
							<option value="PADUA">Padua</option>
							<option value="SAN SEBASTIÁN">San Sebastían</option>
							<option value="VALLEY">Valley</option>
						</CSelect>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<CSelect id="role" label="Rol" v-model="role" :error="roleError">
							<option value="ADMIN">Coordinador de transporte</option>
							<option value="COORDINADOR DE FINCA">Supervisor de finca</option>
							<option value="PORTERO">Portero</option>
						</CSelect>
					</div>

					<div class="col-span-6 sm:col-span-3">
						<CInput
							id="password"
							label="Contraseña"
							type="password"
							v-model="password"
							:error="passwordError"
						/>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<CInput
							type="password"
							id="passwordConfirm"
							label="Confirmación de contraseña"
							v-model="passwordConfirm"
							:error="passwordConfirmError"
						/>
					</div>
				</div>
			</div>
			<div class="bg-gray-100 px-4 py-3 text-right sm:px-6">
				<button type="submit" class="btn btn-primary flex items-center gap-2 text-white">
					<PlusCircleIcon class="h-5" />
					<span>Crear</span>
				</button>
			</div>
		</div>
	</form>
</template>
