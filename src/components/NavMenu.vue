<script lang="ts" setup>
import CapilogTitle from './CapilogTitle.vue';
import {
	TruckIcon,
	InboxInIcon,
	ClipboardListIcon,
	ClipboardIcon,
	GlobeIcon,
	ClipboardCheckIcon,
	UsersIcon,
} from '@heroicons/vue/outline';
import { actions } from '../store';
import { state } from '../store/state';
import { capitalize } from 'lodash';
</script>

<template>
	<div class="flex flex-col justify-between gap-10 bg-gray-700 py-4 px-8">
		<div class="flex flex-col gap-4">
			<router-link :to="{ name: 'home' }" class="flex justify-center">
				<CapilogTitle animated clear class="cursor-pointer text-3xl" />
			</router-link>
			<section v-if="actions.roles.isAdmin()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Administración</h2>
				<router-link :to="{ name: 'users.index' }" class="sidebar-button">
					<UsersIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Usuarios
				</router-link>
				<router-link :to="{ name: 'routes.index' }" class="sidebar-button">
					<GlobeIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Rutas
				</router-link>
				<h2 class="mt-4 text-left text-lg font-medium opacity-80">Envíos y solicitudes</h2>
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<ClipboardIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Solicitudes pendientes
				</router-link>
				<hr class="my-1 opacity-50" />
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<TruckIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Solicitar envío
				</router-link>
			</section>
			<section v-if="actions.roles.isSupervisor()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Envíos y solicitudes</h2>
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<TruckIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Solicitar envío
				</router-link>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<InboxInIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Revisar solicitudes
				</button>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<ClipboardListIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Comprobar envíos
				</button>
			</section>
			<section v-if="actions.roles.isDoorman()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Seguimiento</h2>
				<button class="sidebar-button">
					<ClipboardCheckIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					Gestión de envíos
				</button>
			</section>
		</div>
		<div class="flex flex-col items-center gap-4 text-xl font-medium text-white lg:gap-2 lg:text-base">
			<router-link class="flex flex-col items-center opacity-75 hover:opacity-100" to="/my-profile">
				<span>Mi perfil</span>
				<span v-if="state.user.role.role === 'ADMIN'">(Administrador)</span>
				<span v-else>{{ `(${capitalize(state.user.role.role)})` }}</span>
			</router-link>
			<button class="underline opacity-75 hover:opacity-100" @click="actions.logout">Cerrar sesión</button>
		</div>
	</div>
</template>
