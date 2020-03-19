<template>
	<div class="footer row no-gutters">
		<div class="col"></div>
		<div class="right col-auto">
			<span class="link" id="impressum" @click="$router.push({ name: 'impressum'}).catch(err => {});">Impressum</span>
			<span class="link" id="datenschutz" @click="$router.push({ name: 'datenschutz'}).catch(err => {});">Datenschutz</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'footerComponent',
	watch: {
		'$route'(to) {
			let elem = document.getElementById(to.name)
			let list = document.getElementsByClassName('link')
			for(let it = 0; it < list.length; it++){
				if(list[it].classList.contains('active')){
					list[it].classList.toggle('active')
				}
			}
			if(elem){
				elem.classList.toggle('active')
			}
		}
	},
}
</script>

<style scoped lang="scss">
	.footer{
		background: $background;
		color: $primary;
		width: 100%;
		padding: 40px 0px;
		font-size: 0.6em;
		.link{
			position: relative;
			color: $primary;
			cursor: pointer;
		}
		.link:before{
			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: -4px;
			left: 0;
			background: $primary;
			visibility: hidden;
			transform: scaleX(0);
			transition: .25s linear;
		}
		.link:hover:before, .link:focus:before{
			visibility: visible;
			transform: scaleX(1);
		}
		.active:before{
			visibility: visible;
			transform: scaleX(1);
		}
		.right {
			margin-right: 10px;
			span{
				margin-left: 25px;
			}
		}
	}
	@media only screen and (min-width: 768px) {
		.footer{
			font-size: 1.4em;
			.link:before{
				height: 3px;
			}
			.right{
				margin-right: 75px;
				span{
					margin-left: 40px;
				}
			}
		}
	}
</style>
