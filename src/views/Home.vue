<template>
	<div>
		<div class="landing" id="landing">
			<img class="arrowBottom" id="arrowBottom" src="@/assets/Icons/Pfeil_nach_unten.svg">
		</div>
		<div class="content">
			<aktionen />
		</div>
	</div>
</template>

<script>
	import aktionen from '../views/Aktionen.vue'

	export default {
		name: 'Home',
		components: {
			aktionen
		},
		data() {
			return {
				id: 0
			}
		},
		methods: {
			animate: function() {
				this.resizeLogo()
				this.toggleNaviActive()
				this.positionSlogan()
				this.id = requestAnimationFrame(this.animate)
			},
			resizeLogo: function() {
				let elem = document.getElementById('logo')
				if (elem) {
					if (window.pageYOffset <= (window.innerHeight - 60) * 0.4) {
						elem.style.top = 0.4 * window.innerHeight - window.pageYOffset + 'px'
						elem.style.transform = 'translate(-50%, 0%) scale(' + (0.0114 * window.innerWidth + 3.2) * ((1/(0.0114 * window.innerWidth  + 3.2)) + (0.4 * (window.innerHeight - 60) - window.pageYOffset) / (window.innerHeight - 60)) + ')'
					} else {
						elem.style.transform = 'scale(1) translate(-50%, 50%)'
						elem.style.top = 0 + 'px'
					}
				}
			},
			resetLogo: function(){
				let elem = document.getElementById('logo')
				elem.style.transform = 'scale(1) translate(-50%, 50%)'
				elem.style.top = 0 + 'px'
			},
			positionSlogan: function(){
				let elem = document.getElementById('logo')
				let scale = (0.0114 * window.innerWidth + 3.2) * ((1/(0.0114 * window.innerWidth  + 3.2)) + (0.4 * (window.innerHeight - 60)) / (window.innerHeight - 60))
				let offset = 0.4 * window.innerHeight
				let dist = ((elem.clientHeight * scale) * 0.5 + offset + 25) - 60 - 20
				let slogan = document.getElementById('slogan')
				if(slogan){
					slogan.style.paddingTop = dist + 'px'
				}
			},
			toggleNaviActive: function(){
				let elem = document.getElementById('aktionen')
				if(window.pageYOffset > 0){
					if(!elem.classList.contains('active')){
						elem.classList.toggle('active')
					}
				}
				else{
					if(elem.classList.contains('active')){
						elem.classList.toggle('active')
					}
				}
			}
		},
		created() {
			this.id = requestAnimationFrame(this.animate)
		},
		beforeDestroy() {
			cancelAnimationFrame(this.id)
			requestAnimationFrame(this.resetLogo)
		}
	}
</script>

<style lang="scss">
	.landing {
		min-height: calc(100vh - 60px);
		.arrowBottom{
			position: absolute;
			bottom: 0px;
			left: 50%;
			height: 56px;
			margin-bottom: 30px;
			transform: translateX(-50%);
		}
	}
	.content{
		width: 100%;
		.aktionen{
			min-height: 0px;
			.aktionenImage-Container:first-child{
				margin-top: 20px;
			}
		}
	}
	@media only screen and (min-width: 768px) {
		.landing {
			.slogan{
				line-height: 1.2em;
				font-size: 4vw;
			}
		}
	}
	@media only screen and (max-height: 520px) {
		.landing {
			.slogan{
				line-height: 1.2em;
				font-size: 3.5vw;
				margin-top: -20px;
			}
		}
	}
</style>
