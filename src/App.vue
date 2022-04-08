<script lang="ts" setup>
import ModalView from './components/modals/ModalView.vue';
import ErrorView from './views/ErrorView.vue';
import { actions } from './store';
actions.initialize();
</script>

<template>
	<!-- <modal-view></modal-view> -->
	<ErrorView />
	<router-view></router-view>
</template>
