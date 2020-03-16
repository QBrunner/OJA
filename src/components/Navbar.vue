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
				<span class="linkNaviWrapper" id="aktionen"><a class="linkNavi" @click="$router.push({ name: 'aktionen'}); toggleNavigation()">Aktionen</a></span>
				<span class="linkNaviWrapper" id="kalender"><a class="linkNavi" @click="$router.push({ name: 'kalender'}); toggleNavigation()">Kalender</a></span>
			</div>
			<div class="right">
				<span class="linkNaviWrapper" id="podcasts"><a class="linkNavi" @click="$router.push({ name: 'podcasts'}); toggleNavigation()">Podcasts</a></span>
				<span class="linkNaviWrapper" id="kontakt"><a class="linkNavi" @click="$router.push({ name: 'kontakt'}); toggleNavigation()">Kontakt</a></span>
			</div>
		</div>
		<div class="logo" id="logo" :style="[logoBackground ? {'z-index': 0} : {'z-index': 2}]"  @click="$router.push({ name: 'home'})">
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
				if(to.name === 'aktionenName'){
					elem = document.getElementById('aktionen')
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
				if(to.name != 'home'){
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
					font-size: 8vh;
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
					font-size: 8vh;
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
						margin-right: 85px;
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
						margin-left: 75px;
					}
					span{
						font-size: 19px;
					}
				}
			}
		}
	}

</style>
