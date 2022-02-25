<template>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
					<table v-if="users" class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500"
								>
									Nombre
								</th>
								<th scope="col" colspan="3" class="relative px-6 py-2 text-right">
									<router-link
										:to="{ name: 'admin.users.create' }"
										class="button btn-primary text-white"
									>
										<PlusCircleIcon class="mr-1 h-6 w-6" />
										Crear
									</router-link>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							<tr v-for="user in users" :key="user.email">
								<td class="whitespace-nowrap px-6 py-4">
									<div class="flex items-center">
										<div class="h-10 w-10 flex-shrink-0">
											<Avatar :name="user.name + ' ' + user.lastname" class="h-10 w-10" />
										</div>
										<div class="ml-4">
											<div class="text-sm font-medium text-gray-900">
												{{ user.name + ' ' + user.lastname }}
											</div>
											<div class="text-sm text-gray-500">
												{{ user.role.role }}
											</div>
											<div class="mt-1 text-sm text-gray-500">
												<span class="rounded bg-red-200 px-2 py-1 text-red-600">Bochica</span>
											</div>
										</div>
									</div>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<router-link :to="{ name: 'admin.users.show', params: {dni: user.dni} }" class="flex justify-center text-gray-700 hover:text-gray-900"
										><EyeIcon class="h-6 w-6"
									/></router-link>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<a href="#" class="flex justify-center text-indigo-700 hover:text-indigo-900"
										><PencilAltIcon class="h-6 w-6"
									/></a>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<button @click="destroy(user.dni)" class="text-red-700 hover:text-red-900">
										<TrashIcon class="h-6 w-6" />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Avatar from '../Avatar.vue';
import { ref } from 'vue';
import { usersService } from '../../api/services';
import { PencilAltIcon, TrashIcon, PlusCircleIcon, EyeIcon } from '@heroicons/vue/outline';

export default {
	components: { Avatar, PencilAltIcon, TrashIcon, PlusCircleIcon, EyeIcon },
	setup() {
		const users = ref(null);
		const getUsers = () => {
			usersService.index().then((response) => {
				users.value = response.users;
			});
		}
			
		getUsers();

		const destroy = (dni) => {
			usersService.destroy(dni).then(getUsers);
		};

		return { users, destroy };
	},
};
</script>
