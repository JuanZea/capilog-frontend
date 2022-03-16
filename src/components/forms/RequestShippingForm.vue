<script lang="ts" setup>
import * as yupEs from '../../lang/yupEs';
import CSelect from '../inputs/CSelect.vue';
import CDateTimePicker from '../inputs/CDateTimePicker.vue';
import CTextArea from '../inputs/CTextArea.vue';
import { ArrowCircleRightIcon } from '@heroicons/vue/outline';
import { setLocale } from 'yup';
import { ref } from 'vue';

setLocale(yupEs);
const created = ref(false);

const onSubmit = () => {
	console.log('Creating a request');
};
</script>

<template>
	<form id="requestShippingForm" method="POST" @submit="onSubmit" class="w-full max-w-3xl">
		<Alert v-if="created" text="Solicitud creada exitosamente" />
		<div class="w-full overflow-hidden shadow sm:rounded-md">
			<div class="bg-gray-100 px-4 py-5 sm:p-6">
				<div class="grid grid-cols-7 gap-6">
					<div class="col-span-7 sm:col-span-3">
						<CSelect id="startSite" label="Lugar de Recogida">
							<option>Bochica</option>
							<option>Valley</option>
							<option>Bouquetera</option>
							<option>La Ceja</option>
						</CSelect>
					</div>
					<div class="col-span-7 sm:col-span-2">
						<CDateTimePicker id="startDate" label="Fecha de recogida" type="date" />
					</div>
					<div class="col-span-7 sm:col-span-2">
						<CDateTimePicker id="startTime" label="Hora de recogida" type="time" />
					</div>
					<div class="col-span-7 sm:col-span-3">
						<CSelect id="endSite" label="Lugar de Entrega">
							<option>Bochica</option>
							<option>Valley</option>
							<option>Bouquetera</option>
							<option>La Ceja</option>
							<option>Jose María Cordoba (Aeropuerto)</option>
						</CSelect>
					</div>
					<div class="col-span-7 sm:col-span-2">
						<CDateTimePicker id="endDate" label="Fecha de entrega" type="date" />
					</div>
					<div class="col-span-7 sm:col-span-2">
						<CDateTimePicker id="endTime" label="Hora de entrega" type="time" />
					</div>
					<div class="col-span-7">
						<CTextArea id="description" label="Descripcion del envio y la carga" />
					</div>
				</div>
			</div>
			<div class="bg-gray-100 px-4 py-3 text-right sm:px-6">
				<button type="submit" class="btn btn-primary flex items-center gap-2 text-white">
					<ArrowCircleRightIcon class="h-5" />
					<span>Enviar Solicitud</span>
				</button>
			</div>
		</div>
	</form>
</template>
