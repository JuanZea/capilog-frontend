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
	ReceiptTaxIcon
} from '@heroicons/vue/outline';
import { state, actions } from '@/store';
import { capitalize } from 'lodash';
</script>

<template>
	<div class="flex flex-col justify-between gap-10 bg-gray-700 py-4 px-8 min-w-[300px]">
		<div class="flex flex-col gap-4">
			<router-link :to="{ name: 'home' }" class="flex justify-center">
				<CapilogTitle animated clear class="cursor-pointer text-3xl" />
			</router-link>
			<section v-if="actions.roles.isAdmin() || actions.roles.isCoordinator()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Administración</h2>
				<router-link :to="{ name: 'users.index' }" class="sidebar-button">
					<UsersIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Usuarios</span>
				</router-link>
				<router-link :to="{ name: 'routes.index' }" class="sidebar-button">
					<GlobeIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Rutas</span>
				</router-link>
			</section>
			<section v-if="actions.roles.isAdmin() || actions.roles.isCoordinator()" class="text-white">
				<h2 class="mt-4 text-left text-lg font-medium opacity-80">Gestión de transporte</h2>
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<ClipboardIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Solicitudes pendientes</span>
				</router-link>
				<router-link :to="{ name: 'home' }" class="sidebar-button">
					<ReceiptTaxIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Generar reportes</span>
				</router-link>
			</section>
			<section v-if="actions.roles.isAdmin() || actions.roles.isSupervisor()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Envíos y solicitudes</h2>
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<TruckIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Solicitar envío</span>
				</router-link>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<InboxInIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Revisar solicitudes</span>
				</button>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<ClipboardListIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Comprobar envíos</span>
				</button>
			</section>
			<section v-if="actions.roles.isAdmin() || actions.roles.isDoorman()" class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Seguimiento</h2>
				<button class="sidebar-button">
					<ClipboardCheckIcon class="h-9 w-9 lg:h-7 lg:w-7" />
					<span class="text-sm md:text-base">Gestión de envíos</span>
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
