<template>
	<div class="wrapper">
		<div class="menu-icon-bar row no-gutters">
			<div class="menu-icon col-auto" @click="toggleNavigation(), toggleLogoVisability()">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="navigation" id="navigation">
			<div class="left">
				<span class="close-button" @click="toggleNavigation">&times;</span>
				<span class="linkNaviWrapper" id="news"><a class="linkNavi" @click="$router.push({ name: 'news'}).catch(err => {}); toggleNavigation()">News</a></span>
				<span class="linkNaviWrapper" id="termine"><a class="linkNavi" @click="$router.push({ name: 'termine'}).catch(err => {}); toggleNavigation()">Termine</a></span>
				<span class="linkNaviWrapper" id="mehrvonuns"><a class="linkNavi" @click="$router.push({ name: 'mehrvonuns'}).catch(err => {}); toggleNavigation()">Mehr von Uns</a></span>
			</div>
			<div class="right">
				<span class="linkNaviWrapper" id="podcasts"><a class="linkNavi" @click="$router.push({ name: 'podcasts'}).catch(err => {}); toggleNavigation()">Podcasts</a></span>
				<!--<span class="linkNaviWrapper" id="mitmachen"><a class="linkNavi" @click="$router.push({ name: 'mitmachen'}); toggleNavigation()">Mitmachen</a></span>-->
				<span class="linkNaviWrapper" id="kontakt"><a class="linkNavi" @click="$router.push({ name: 'kontakt'}).catch(err => {}); toggleNavigation()">Kontakt</a></span>
			</div>
		</div>
		<div class="logo" id="logo" :style="[logoBackground ? {'z-index': 0} : {'z-index': 2}]"  @click="$router.push({ name: 'home'}).catch(err => {})">
			<img src="@/assets/testing/mainPageWhite.png">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				logoBackground: true,
			}
		},
		methods: {
			toggleNavigation: function() {
				document.getElementById('navigation').classList.toggle('expanded')
				this.toggleLogoVisability
			},
			toggleLogoVisability: function(){
				if(document.getElementById('navigation').classList.contains('expanded') && window.innerWidth < 768){
					this.logoBackground = true
				}
				else{
					this.logoBackground = false
				}
			},
			resize: function(){
				this.toggleLogoVisability()
			}
		},
		watch: {
			'$route'(to) {
				let elem = {}
				if(to.name === 'newsName'){
					elem = document.getElementById('news')
				}
				else if(to.name === 'termineName'){
					elem = document.getElementById('termine')
				}
				else if(to.name === 'podcastsName'){
					elem = document.getElementById('podcasts')
				}
				else{
					elem = document.getElementById(to.name)
				}
				let list = document.getElementsByClassName('linkNaviWrapper')
				for(let it = 0; it < list.length; it++){
					if(list[it].classList.contains('active')){
						list[it].classList.toggle('active')
					}
				}
				if(to.name != 'home' && to.name != 'impressum' && to.name != 'datenschutz'){
					elem.classList.toggle('active')
				}
			}
		},
		created(){
			window.addEventListener('resize', this.resize);
			requestAnimationFrame(this.toggleLogoVisability)
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.resize);
		}
	}
</script>

<style scoped lang="scss">
	.wrapper{
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		.logo{
			position: absolute;
			left: 50%;
			font-size: 25px;
			margin-top: -13px;
			transform: translate(-50%, 50%);
			cursor: pointer;
			z-index: 2;
			img{
				height: 50px;
			}
		}
		.menu-icon-bar{
			width: 100%;
			background: $background-light;
			position: absolute;
			top: 0;
			height: 80px;
			box-shadow: 0px 0px 50px black;
			.menu-icon{
				margin-top: 25px;
				cursor: pointer;
				height: 32px;
				right: 15px;
				position: absolute;
				div {
					width: 25px;
					height: 2px;
					background-color: $primary;
					margin: 6px;
				}
			}
		}
		.navigation {
			height: 100%;
			width: 0%;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			background-color: $background-light;
			overflow-x: hidden;
			transition: 0.5s;
			padding-top: 60px;
			text-align: left;
			.linkNavi{
				position: relative;
				color: $primary;
				line-height: 2em;
				cursor: pointer;
			}
			.linkNavi:before{
				content: "";
				position: absolute;
				width: 100%;
				height: 3px;
				bottom: -4px;
				left: 0;
				background: $primary;
				visibility: hidden;
				transform: scaleX(0);
				transition: .25s linear;
			}
			.active{
				.linkNavi:before{
					content: "";
					position: absolute;
					width: 100%;
					height: 3px;
					bottom: -4px;
					left: 0;
					background: $primary;
					visibility: visible;
					transform: scaleX(1);
					transition: .25s linear;
				}
			}
			.linkNavi:hover:before, .linkNavi:focus:before{
				visibility: visible;
				transform: scaleX(1);
			}
			.linkNavi:after{
				white-space: pre;
				content: "\A";
			}
			.left{
				text-align:center;
				a{
					font-size: 6vh;
				}
				span{
					font-size: 25px;
					color: $primary;
					display: block;
				}
				.close-button{
					position: absolute;
					top: 0px;
					right: 25px;
					font-size: 50px;
					cursor: pointer;
				}
			}
			.right{
				text-align:center;
				a{
					font-size: 6vh;
				}
			}

		}
		.expanded{
			width: 100%;
		}
	}
	@media only screen and (min-width: 768px) {
		.wrapper{
			.logo{
				margin-top: -2px;
			}
			.menu-icon-bar{
				.menu-icon{
					display: none;
				}
			}
			.navigation{
				background: rgba(0,0,0,0);
				padding-top: 0px;
				width: 100%;
				height: 80px;
				.linkNavi:after{
					white-space: initial;
					content: "";
				}
				.linkNavi{
					line-height: 1em;
				}
				.left{
					transform: translate(0%, 100%);
					position: absolute;
					left: 40px;
					a{
						font-size: 17px;
						margin-right: 35px;
					}
					span{
						display: inline;
						font-size: 17px;
					}
					.close-button{
						display: none;
					}
				}
				.right{
					position: absolute;
					right: 40px;
					transform: translate(0%, 100%);
					a{
						font-size: 17px;
						margin-left: 40px;
					}
					span{
						display: inline;
						font-size: 17px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.wrapper{
			.navigation{
				.left{
					margin-top: 11px;
					left: 80px;
					transform: translate(0%, 50%);
					a{
						font-size: 19px;
						margin-right: 50px;
					}
					span{
						font-size: 19px;
					}
				}
				.right{
					transform: translate(0%, 50%);
					margin-top: 11px;
					right: 90px;
					a{
						font-size: 19px;
						margin-left: 50px;
					}
					span{
						font-size: 19px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 1400px) {
		.wrapper{
			.navigation{
				.left{
					left: 80px;
					a{
						margin-right: 85px;
					}
				}
				.right{
					right: 90px;
					a{
						margin-left: 75px;
					}
				}
			}
		}
	}

</style>
