<template>
	<div>
		<div class="landing" id="landing" v-if="showLanding">
			<img class="arrowBottom" id="arrowBottom" src="@/assets/Icons/Pfeil_nach_unten.svg">
		</div>
		<div class="content">
			<termine />
			<news />
		</div>
	</div>
</template>

<script>
	import news from '../views/News.vue'
	import termine from '../views/Termine.vue'

	export default {
		name: 'Home',
		components: {
			news,
			termine
		},
		data() {
			return {
				id: 0,
				showLanding: true
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
					if (window.pageYOffset <= (window.innerHeight - 60) * 0.4 && window.innerHeight > 400) {
						elem.style.top = 0.4 * window.innerHeight - window.pageYOffset + 'px'
						elem.style.transform = 'translate(-50%, 0%) scale(' + (0.0114 * window.innerWidth + 3.2) * ((1/(0.0114 * window.innerWidth  + 3.2)) + (0.4 * (window.innerHeight - 60) - window.pageYOffset) / (window.innerHeight - 60)) + ')'
						this.showLanding = true;
					} else {
						elem.style.transform = 'scale(1) translate(-50%, 50%)'
						elem.style.top = 0 + 'px'
						if(window.innerHeight <= 400){
							this.showLanding = false
						}
						else{
							this.showLanding = true
						}
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
				let elem = document.getElementById('news')
				let kelem = document.getElementById('termine')
				if(window.pageYOffset > document.getElementsByClassName('termine')[0].getBoundingClientRect().bottom){
					if(!elem.classList.contains('active')){
						elem.classList.toggle('active')
					}
					if(kelem.classList.contains('active')){
						kelem.classList.toggle('active')
					}
				}
				else if(window.pageYOffset > 0){
					if(!kelem.classList.contains('active')){
						kelem.classList.toggle('active')
					}
					if(elem.classList.contains('active')){
						elem.classList.toggle('active')
					}
				}
				else{
					if(elem.classList.contains('active')){
						elem.classList.toggle('active')
					}
					if(kelem.classList.contains('active')){
						kelem.classList.toggle('active')
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
		.news{
			min-height: 0px;
			.newsImage-Container:first-child{
				margin-top: 20px;
			}
		}
		.termine{
			min-height: 0px;
			margin-bottom: 110px;
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
