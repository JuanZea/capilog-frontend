<script lang="ts" setup>
import { userService } from '../../services';
import CInput from '../inputs/CInput.vue';
const submit = (event) => {
	event.preventDefault();
	const form = document.getElementById('createUserForm');
	const formData = new FormData(form);

	for (var pair of formData.entries()) {
		console.log(pair[0] + ', ' + pair[1]);
	}

	// usersService.create(data)
};
</script>

<template>
	<div>
		<div class="md:grid md:grid-cols-2 md:gap-6">
			<div class="mt-5 md:col-span-2 md:mt-0">
				<form id="createUserForm" method="POST">
					<div class="overflow-hidden shadow sm:rounded-md">
						<div class="bg-gray-100 px-4 py-5 sm:p-6">
							<div class="grid grid-cols-6 gap-6">
								<div class="col-span-6 sm:col-span-3">
									<CInput id="name" label="Nombre" />
								</div>
								<div class="col-span-6 sm:col-span-3">
									<CInput id="email" label="Correo electrónico" />
								</div>

								<div class="col-span-6 sm:col-span-3">
									<label for="documentType" class="block text-sm font-medium text-gray-700"
										>Tipo de documento</label
									>
									<select
										id="documentType"
										name="type-name"
										autocomplete="name"
										class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option>Cédula de ciudadanía</option>
										<option>Cédula de extrangería</option>
									</select>
								</div>
								<div class="col-span-6 sm:col-span-3">
									<CInput id="document" label="Documento" />
								</div>

								<div class="col-span-6 sm:col-span-3">
									<CInput id="phone" label="Telefono" />
								</div>
								<div class="col-span-6 sm:col-span-3">
									<CInput id="farm" label="Finca" />
								</div>
								<div class="col-span-6 sm:col-span-3">
									<label for="role" class="block text-sm font-medium text-gray-700">Rol</label>
									<select
										id="role"
										name="role"
										autocomplete="role-name"
										class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									>
										<option>Coordinador de transporte</option>
										<option>Supervisor de finca</option>
										<option>Portero</option>
									</select>
								</div>
							</div>
						</div>
						<div class="bg-gray-100 px-4 py-3 text-right sm:px-6">
							<button type="submit" @click="submit" class="button btn-primary text-white">Crear</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
