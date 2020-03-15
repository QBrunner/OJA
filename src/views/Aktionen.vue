<template>
  <div class="aktionen">
		<div class="aktionenImage-Container" @click="$router.push({ name: 'aktionenName', params: { name: 'oja-treffen' }})">
			<div>
				<img src="@/assets/testing/Ice.jpg">
				<div class="overlay"></div>
				<h3 class="aktionenHeading">OJA Treffen 16.03</h3>
				<div class="aktionenShowMoreContainer">
					<span class="aktionenShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
				</div>
			</div>
		</div>
		<div class="aktionenImage-Container" @click="$router.push({ name: 'aktionenName', params: { name: 'respekt' }})">
			<img src="@/assets/testing/Ice1.jpg">
			<div class="overlay"></div>
			<h3 class="aktionenHeading">Aktion Respekt</h3>
			<div class="aktionenShowMoreContainer">
				<span class="aktionenShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
			</div>
		</div>
		<div class="aktionenImage-Container" @click="$router.push({ name: 'aktionenName', params: { name: 'azubi-bowling' }})">
			<img src="@/assets/testing/Ice2.jpg">
			<div class="overlay"></div>
			<h3 class="aktionenHeading">Azubi bowling</h3>
			<div class="aktionenShowMoreContainer">
				<span class="aktionenShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'aktionen',
		data() {
			return {
				lastSize: 10000
			}
		},
		methods: {
			resize: function(){
				if(window.innerWidth < 992){
					this.resetHeading()
				}
				//randomized heading when resizing
				else if(this.lastSize < 992){
					this.randomizeHeading()
				}
				this.lastSize = window.innerWidth
			},
			randomizeHeading: function(){
				let list = document.getElementsByClassName('aktionenHeading')
				for(let it = 0; it < list.length; it++){
					list[it].style.top = ((Math.random() * 30)) + '%'
				}
			},
			resetHeading: function(){
				let list = document.getElementsByClassName('aktionenHeading')
				for(let it = 0; it < list.length; it++){
					list[it].style.top = 10 + '%'
				}
			}
		},
		created() {
			requestAnimationFrame(this.randomizeHeading)
			window.addEventListener('resize', this.resize)
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.resize);
		}
	}
</script>

<style lang="scss">
	.aktionen{
		min-height: calc(100vh - 164px);
		margin: 0px 30px;
		animation: fadeContent;
		animation-duration: 1s;
		.aktionenImage-Container{
			cursor: pointer;
			position: relative;
			margin: 20px 0px;
			img{
				margin: 0px 0px 0px 10px;
				width: calc(100% - 10px);
			}
			.overlay{
				position: absolute;
				top: 0;
				bottom: 0;
				left: 10px;
				right: 0;
				height: 100%;
				width: calc(100% - 10px);
				opacity: 1;
				transition: .5s ease;
				background: rgba(0,0,0,0.5);
			}
			.aktionenHeading{
				position: absolute;
				font-size: 8vw;
				top: 10%;
			}
			.aktionenShowMore{
				position: absolute;
				bottom: 13%;
				right: 20%;
				transition: 0.7s ease;
				white-space: nowrap;
				font-size: 3.6vw;
				animation-name: aktionenSlideIn;
				animation-duration: 1.5s;
			}
			.aktionenShowMoreContainer{
				position: absolute;
				top: 0;
				height: 100%;
				width: 100%;
				overflow-x: hidden;
				img{
					width: 10.6vw;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 100%;
				}
			}
		}
    .aktionenImage-Container:first-child{
      margin-top: 100px;
    }
		.aktionenImage-Container:nth-child(even){
			.aktionenHeading{
				right: -10px;
			}
		}
		.aktionenImage-Container:hover{
			.overlay{
				opacity: 1;
			}
			.aktionenShowMore{
				right: 18%;
			}
		}
	}
	@keyframes aktionenSlideIn {
		0%{ opacity: 0; transform: translateX(-100%)}
		100%{ opacity: 1; transform: translateX(0%)}
	}
	@media only screen and (min-width: 768px) {
		.aktionen{
			min-height: calc(100vh - 194px);
			.aktionenImage-Container{
				img{
					margin: 0px;
					width: 100%;
				}
				.overlay{
					left: 0;
					width: 100%;
				}
				.aktionenShowMoreContainer{
					img{
						width: 8.6vw;
						margin: 0px 0px 0px 20px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.aktionen{
			margin: 0px 20%;
			.aktionenImage-Container{
				margin: 80px 0px;
				width: 62%;
        .overlay{
          opacity: 0;
        }
				.aktionenHeading{
					font-size: 5vw;
				}
				.aktionenShowMore{
					font-size: 1.4em;
					transition: 0.7s ease;
				}
				.aktionenShowMoreContainer{
					img{
						width: 3.6vw;
					}
				}
			}
      .aktionenImage-Container:first-child{
        margin-top: 160px;
      }
			.aktionenImage-Container:nth-child(even){
				margin-left: auto;
				margin-right: 0px;
				.aktionenHeading{
					right: -40%;
				}
			}
			.aktionenImage-Container:nth-child(odd){
				.aktionenHeading{
					left: -40%;
				}
			}
		}
	}
</style>
