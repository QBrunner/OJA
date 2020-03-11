<template>
	<div class="footer row no-gutters">
		<div class="col"></div>
		<div class="right col-auto">
			<span class="link">Impressum</span>
			<span class="link">Datenschutz</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Navbar',
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
