<script setup lang="ts">
import { capitalize } from 'lodash';
import { state } from '@/store';
import Avatar from '@/components/Avatar.vue';
import Fieldset from '@/components/Fieldset.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';

const user = state.user;
</script>

<template>
	<AuthLayout>
		<div class="bg-aztec flex w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<h1 class="text mb-2 text-center font-semibold text-gray-400">Mi Perfil</h1>
				<div class="mb-4 flex justify-center"><Avatar :name="user.name" class="h-20 w-20 text-3xl" /></div>
				<div class="flex justify-center">
					<Fieldset v-if="user" label="Información">
						<div class="flex gap-2">
							<div class="text-right font-semibold text-gray-800">
								<div><span>Nombre</span></div>
								<div><span>Correo electrónico</span></div>
								<div><span>Identificación</span></div>
								<div><span>Telefono</span></div>
								<div><span>Finca</span></div>
								<div><span>Rol</span></div>
								<div><span>Fecha de registro</span></div>
							</div>
							<div class="font-medium text-gray-500">
								<div>
									<span>{{ user.name }}</span>
								</div>
								<div>
									<span>{{ user.email }}</span>
								</div>
								<div>
									<span>{{ user.dni }}</span>
								</div>
								<div>
									<span>{{ user.phone }}</span>
								</div>
								<div>
									<span>{{ capitalize(user.farm.farm) ?? 'Desconocida' }}</span>
								</div>
								<div>
									<span v-if="user.role.role === 'ADMIN'">Administrador</span>
									<span v-else>{{ capitalize(user.role.role) }}</span>
								</div>
								<div>
									<span>{{
										formatDistance(new Date(user.createdAt), Date.now(), { locale: es, addSuffix: true })
									}}</span>
								</div>
							</div>
						</div>
					</Fieldset>
				</div>
			</div>
		</div>
	</AuthLayout>
</template>
