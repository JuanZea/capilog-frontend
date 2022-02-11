<template>
	<div class="flex h-full flex-col justify-between gap-10 bg-gray-700 py-4 px-8">
		<div>
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
		</div>
		<div class="flex flex-col items-center gap-4 text-xl font-medium text-white underline lg:gap-2 lg:text-base">
			<router-link class="opacity-75 hover:opacity-100" to="/my-profile">Mi perfil</router-link>
			<router-link class="opacity-75 hover:opacity-100" to="/">Cerrar sesión</router-link>
		</div>
	</div>
</template>

<script>
import CapilogTitle from './CapilogTitle.vue';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon } from '@heroicons/vue/outline';
export default {
	components: { CapilogTitle, TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon },
};
</script>
