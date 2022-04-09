<script lang="ts" setup>
import * as yupEs from '../../lang/yupEs';
import Alert from '../Alert.vue';
import CInput from '../inputs/CInput.vue';
import CSelect from '../inputs/CSelect.vue';
import CTextArea from '../inputs/CTextArea.vue';
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { ArrowCircleRightIcon } from '@heroicons/vue/outline';
import { setLocale, object, string, date as dateRule } from 'yup';
import { state } from '../../store';
import { format } from 'date-fns';

setLocale(yupEs);
const created = ref(false);

const { meta, values, resetForm, handleSubmit } = useForm<any>({
	validationSchema: object({
		startSite: string().required().label('El lugar de recogida'),
		endSite: string().required().label('El lugar de entrega'),
		date: dateRule().required().label('La fecha de recogida'),
		time: string().required().label('La hora de recogida'),
		description: string().max(256).label('La descripción'),
	}),
	initialValues: {
		date: format(Date.now(), 'yyyy-MM-dd'),
		time: format(Date.now(), 'H:m'),
		startSite: '',
		endSite: '',
	},
});

const { errorMessage: startSiteError, value: startSite } = useField<string>('startSite');
const { errorMessage: endSiteError, value: endSite } = useField<string>('endSite');
const { errorMessage: dateError, value: date } = useField<string>('date');
const { errorMessage: timeError, value: time } = useField<string>('time');
const { errorMessage: descriptionError, value: description } = useField<string>('description');

const onSubmit = handleSubmit((values) => {
	console.log(values);
	created.value = true;
});
</script>

<template>
	<form id="requestShippingForm" method="POST" @submit="onSubmit" class="w-full max-w-3xl">
		<Alert v-if="created" text="Solicitud creada exitosamente" />
		<div class="w-full shadow sm:rounded-md">
			<div class="bg-gray-100 px-4 py-5 sm:p-6">
				<div class="grid grid-cols-2 gap-6">
					<div class="col-span-2 sm:col-span-1">
						<CSelect id="startSite" label="Lugar de Recogida" :error="startSiteError" v-model="startSite">
							<option value="" disabled hidden>Selecciona una finca</option>
							<option v-for="farm in state.farms" :key="farm.idFarm">{{ farm.farm }}</option>
						</CSelect>
					</div>
					<div class="col-span-2 sm:col-span-1">
						<CSelect id="endSite" label="Lugar de Entrega" :error="endSiteError" v-model="endSite">
							<option value="" disabled hidden>Selecciona una finca</option>
							<option v-for="farm in state.farms" :key="farm.idFarm">{{ farm.farm }}</option>
						</CSelect>
					</div>
					<div class="col-span-2 sm:col-span-1">
						<CInput
							id="startDate"
							label="Fecha de recogida"
							:error="dateError"
							type="date"
							v-model="date"
						/>
					</div>
					<div class="col-span-2 sm:col-span-1">
						<CInput id="startTime" label="Hora de recogida" :error="timeError" type="time" v-model="time" />
					</div>
					<div class="col-span-2">
						<CTextArea
							id="description"
							label="Descripcion del envio y la carga"
							:error="descriptionError"
							v-model="description"
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-end gap-4 bg-gray-100 px-4 py-3 text-right sm:px-6">
				<button type="button" @click="resetForm()" class="btn btn-dark flex items-center gap-2 text-white">
					<span>Limpiar</span>
				</button>
				<button type="submit" class="btn btn-primary flex items-center gap-2 text-white">
					<ArrowCircleRightIcon class="h-5" />
					<span>Enviar Solicitud</span>
				</button>
			</div>
		</div>
	</form>
</template>
