<script lang="ts" setup>
import CapilogTitle from './CapilogTitle.vue';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon, UsersIcon } from '@heroicons/vue/outline';
import { actions } from '../store'
</script>

<template>
	<div class="flex flex-col justify-between gap-10 bg-gray-700 py-4 px-8">
		<div class="flex flex-col gap-4">
			<section>
				<router-link :to="{ name: 'home' }" class="mb-4 flex justify-center">
					<CapilogTitle animated clear class="cursor-pointer text-3xl" />
				</router-link>
				<router-link :to="{ name: 'request' }" class="sidebar-button">
					<TruckIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Solicitar envío
				</router-link>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<InboxInIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Revisar solicitudes
				</button>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<ClipboardListIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Comprobar envíos
				</button>
			</section>
			<section class="text-white">
				<h2 class="text-left text-lg font-medium opacity-80">Administración</h2>
				<router-link :to="{ name: 'users.index' }" class="sidebar-button">
					<UsersIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Usuarios
				</router-link>
			</section>
		</div>
		<div class="flex flex-col items-center gap-4 text-xl font-medium text-white underline lg:gap-2 lg:text-base">
			<router-link class="opacity-75 hover:opacity-100" to="/my-profile">Mi perfil</router-link>
			<button class="opacity-75 hover:opacity-100" @click="actions.logout">Cerrar sesión</button>
		</div>
	</div>
</template>
