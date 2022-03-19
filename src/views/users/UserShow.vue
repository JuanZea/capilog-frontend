<script lang="ts" setup>
import { ref } from 'vue';
import Fieldset from '../../components/Fieldset.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import { useRoute } from 'vue-router';
import { userService } from '../../services';

const route = useRoute();
const user = ref(null);
const getUser = () => {
	userService.show(route.params.dni).then((response) => {
		user.value = response.data.data[0];
	});
};

getUser();
</script>

<template>
	<AuthLayout>
		<div class="bg-aztec flex w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<div class="mb-4 flex flex-col items-center justify-center gap-2">
					<h1 class="text text-center font-semibold text-gray-400">USUARIO</h1>
					<Fieldset v-if="user" label="Información">
						<div class="flex gap-2">
							<div class="text-right font-semibold text-gray-800">
								<div><span>DNI</span></div>
								<div><span>Nombre</span></div>
								<div><span>Correo electrónico</span></div>
								<div><span>Finca</span></div>
								<div><span>Rol</span></div>
								<div><span>Telefono</span></div>
							</div>
							<div class="font-medium text-gray-500">
								<div>
									<span>{{ user.dni }}</span>
								</div>
								<div>
									<span>{{ user.name + ' ' + user.lastname }}</span>
								</div>
								<div>
									<span>{{ user.email }}</span>
								</div>
								<div>
									<span>{{ 'Bochica' }}</span>
								</div>
								<div>
									<span>{{ user.role.role }}</span>
								</div>
								<div>
									<span>{{ user.phone }}</span>
								</div>
							</div>
						</div>
					</Fieldset>
				</div>
			</div>
		</div>
	</AuthLayout>
</template>
