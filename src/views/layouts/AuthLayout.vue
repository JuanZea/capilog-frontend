<template>
	<div class="flex flex-col lg:flex-row h-screen w-screen bg-gray-200">
		<div @click="openMenu" class="lg:hidden bg-gray-700 h-7 p-2 flex justify-center">
			<div class="absolute bg-gray-700 rounded-full border-2 border-white">
				<ArrowSmDownIcon class="h-7 w-7 text-white"/>
			</div>
		</div>
		<div class="flex-col justify-between bg-gray-700 py-4 px-8 hidden lg:flex">
			<div>
				<router-link to="/home" class="mb-4 flex justify-center">
					<CapilogTitle animated clear class="cursor-pointer text-3xl" />
				</router-link>
				<button class="sidebar-button">
					<TruckIcon class="h-7 w-7 text-white" />
					Solicitar envío
				</button>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<InboxInIcon class="h-7 w-7 text-white" />
					Revisar solicitudes
				</button>
				<hr class="my-1 opacity-50" />
				<button class="sidebar-button">
					<ClipboardListIcon class="h-7 w-7 text-white" />
					Comprobar envíos
				</button>
			</div>
			<div class="text-white underline flex gap-2 font-medium flex-col items-center">
				<router-link class="hover:opacity-100 opacity-75" to="/my-profile">Mi perfil</router-link>
				<router-link class="hover:opacity-100 opacity-75" to="/">Cerrar sesión</router-link>
			</div>
		</div>
		<slot />
	</div>
</template>

<script>
import CapilogTitle from '../../components/CapilogTitle.vue';
import { TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon } from '@heroicons/vue/outline';
export default {
	components: { CapilogTitle, TruckIcon, InboxInIcon, ClipboardListIcon, ArrowSmDownIcon },
	setup() {
		const openMenu = () => {
			
		}

		return { openMenu }
	}
};
</script>
