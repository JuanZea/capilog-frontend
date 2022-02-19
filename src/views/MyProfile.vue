<template>
	<AuthLayout>
		<div class="bg-aztec flex h-full w-full p-8">
			<div class="w-full bg-gray-200 p-8">
				<h1 class="text mb-2 text-center font-semibold text-gray-400">Mi Perfil</h1>
				<div class="mb-4 flex justify-center"><Avatar class="h-20 w-20 text-3xl" /></div>
				<div class="flex justify-center">
					<Fieldset label="Información">
						<div class="flex gap-2">
							<div class="text-right font-semibold text-gray-800">
								<div><span>Nombre</span></div>
								<div><span>Correo electrónico</span></div>
								<div><span>Finca</span></div>
								<div><span>Rol</span></div>
							</div>
							<div class="font-medium text-gray-500">
								<div>
									<span>{{ user.name }}</span>
								</div>
								<div>
									<span>{{ user.email }}</span>
								</div>
								<div>
									<span>{{ user.farm }}</span>
								</div>
								<div>
									<span>{{ user.role }}</span>
								</div>
							</div>
						</div>
					</Fieldset>
				</div>
			</div>
		</div>
	</AuthLayout>
</template>

<script>
import { state } from '../store';

import Avatar from '../components/Avatar.vue';
import Fieldset from '../components/Fieldset.vue';
import AuthLayout from './layouts/AuthLayout.vue';
export default {
	components: { AuthLayout, Avatar, Fieldset },
	setup() {
		const user = state.user;
		return { user };
	},
};
</script>
