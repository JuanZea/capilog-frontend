<template>
	<modal-view></modal-view>
	<router-view></router-view>
</template>

<script>
import ModalView from './components/modals/ModalView.vue';
export default {
	components: { ModalView },
};
</script>
