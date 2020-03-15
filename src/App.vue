<template>
	<div id="app">
		<div class="page-content">
			<router-view class="fading"/>
		</div>
		<Footer />
		<Navbar />
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'home',
		components: {
			Navbar,
			Footer
		}
	}
</script>


<style lang="scss">
	.page-content {
		margin-top: 80px;
		width: 100%;
		.fading{
			animation: fadeContent;
			animation-duration: 1s;
		}
	}
</style>
