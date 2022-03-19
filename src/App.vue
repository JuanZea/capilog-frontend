<script lang="ts" setup>
import ModalView from './components/modals/ModalView.vue';
import { actions } from './store'
actions.initialize();
</script>

<template>
	<modal-view></modal-view>
	<router-view></router-view>
</template>
