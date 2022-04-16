<script setup lang="ts">
import { currentModal, closeModal } from '../../ts/modals';
</script>

<template>
	<button
		v-if="currentModal"
		class="slec absolute z-40 flex h-screen w-screen bg-black bg-opacity-25"
		@click="closeModal"
	>
		<div class="flex w-full flex-col">
			<Component :is="currentModal" />
		</div>
	</button>
</template>
