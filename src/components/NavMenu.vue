<template>
	<div class="flex h-full flex-col justify-between gap-10 bg-gray-700 py-4 px-8">
		<div class="flex flex-col gap-4">
			<section>
				<router-link to="/home" class="mb-4 flex justify-center">
					<CapilogTitle animated clear class="cursor-pointer text-3xl" />
				</router-link>
				<button class="sidebar-button">
					<TruckIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Solicitar envío
				</button>
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
				<h2 class="text-lg font-medium">Management</h2>
				<router-link :to="{ name: 'admin.users' }" class="sidebar-button">
					<UsersIcon class="h-9 w-9 text-white lg:h-7 lg:w-7" />
					Administrar ususarios
				</router-link>
			</section>
		</div>
		<div class="flex flex-col items-center gap-4 text-xl font-medium text-white underline lg:gap-2 lg:text-base">
			<router-link class="opacity-75 hover:opacity-100" to="/my-profile">Mi perfil</router-link>
			<router-link class="opacity-75 hover:opacity-100" to="/">Cerrar sesión</router-link>
		</div>
	</div>
</template>

<script>
import CapilogTitle from './CapilogTitle.vue';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon, UsersIcon } from '@heroicons/vue/outline';
import Fieldset from './Fieldset.vue';
export default {
	components: { CapilogTitle, TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon, UsersIcon, Fieldset },
};
</script>
