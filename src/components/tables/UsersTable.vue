<template>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
								>
									Nombre
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
								>
									Finca
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
								>
									Rol
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th>
								<th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Delete</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							<tr v-for="user in users" :key="user.email">
								<td class="whitespace-nowrap px-6 py-4">
									<div class="flex items-center">
										<div class="h-10 w-10 flex-shrink-0">
											<Avatar class="h-10 w-10" />
										</div>
										<div class="ml-4">
											<div class="text-sm font-medium text-gray-900">
												{{ user.name }}
											</div>
											<div class="text-sm text-gray-500">
												{{ user.email }}
											</div>
										</div>
									</div>
								</td>
								<td class="whitespace-nowrap px-6 py-4">
									<span
										class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
									>
										{{ user.farm }}
									</span>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
									{{ user.role }}
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<a href="#" class="text-indigo-700 hover:text-indigo-900"
										><PencilAltIcon class="h-5 w-5"
									/></a>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<a href="#" class="text-red-700 hover:text-red-900"
										><TrashIcon class="h-5 w-5"
									/></a>
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
import { state } from '../../store';
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/outline';

import Avatar from '../Avatar.vue';
export default {
	components: { Avatar, PencilAltIcon, TrashIcon },
	setup() {
		return { users: [state.user] };
	},
};
</script>
