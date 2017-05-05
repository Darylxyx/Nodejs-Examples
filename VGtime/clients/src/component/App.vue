<template>
	<div class='container'>
		<headers></headers>
		<div class='middle-content'>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

import headers from './Headers.vue';

export default {
	data() {
		return {
			msg: 'Hello VGtime'
		}
	},
	components: {
		headers
	}
}

</script>

<style>
.middle-content {
	position: absolute;
	left: 0;
	top: 50px;
	right: 0;
	bottom: 0;
	background-color: #f7f7f7;
	overflow-y: auto;
}

</style>