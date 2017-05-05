<template>
	<div class='header'>
		<div @click='changeMenu(index)' :class="[pageIndex == index ? 'header-item-active' : '', 'header-item', 'text-center', 'f-16', 'relative']" v-for="(item, index) in menuArr">{{item.title}}</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			pageIndex: 0,
			menuArr: [
				{
					title: '首页'
				},
				{
					title: '新闻'
				},
				{
					title: '评测'
				}
			]
		}
	},
	methods: {
		changeMenu(index) {
			this.pageIndex = index;
		}
	}
}

</script>

<style>

.header {
	height: 50px;
	padding: 0 10%;
	line-height: 50px;
	color: #fff;
	background-color: green;
}

.header-item {
	/*width: 15%;*/
	margin-right: 7%;
	float: left;
	cursor: pointer;
}

.header-item-active::after {
	content: '';
	width: 100%;
	height: 4px;
	background-color: #fff;
	position: absolute;
	left: 0;
	bottom: 0;
}
	
</style>