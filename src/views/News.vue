<template>
  <div class="news">
		<div class="newsImage-Container" @click="$router.push({ name: 'newsName', params: { name: 'oja-treffen' }})">
			<div>
				<img src="@/assets/testing/Ice.jpg">
				<div class="overlay"></div>
				<h3 class="newsHeading">OJA Treffen 16.03</h3>
				<div class="newsShowMoreContainer">
					<span class="newsShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
				</div>
			</div>
		</div>
		<div class="newsImage-Container" @click="$router.push({ name: 'newsName', params: { name: 'respekt' }})">
			<img src="@/assets/testing/Ice1.jpg">
			<div class="overlay"></div>
			<h3 class="newsHeading">Aktion Respekt</h3>
			<div class="newsShowMoreContainer">
				<span class="newsShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
			</div>
		</div>
		<div class="newsImage-Container" @click="$router.push({ name: 'newsName', params: { name: 'azubi-bowling' }})">
			<img src="@/assets/testing/Ice2.jpg">
			<div class="overlay"></div>
			<h3 class="newsHeading">Azubi bowling</h3>
			<div class="newsShowMoreContainer">
				<span class="newsShowMore">Mehr anzeigen<img src="@/assets/Icons/Pfeil_nach_rechts.svg"></span>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'news',
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
				let list = document.getElementsByClassName('newsHeading')
				for(let it = 0; it < list.length; it++){
					list[it].style.top = ((Math.random() * 30)) + '%'
				}
			},
			resetHeading: function(){
				let list = document.getElementsByClassName('newsHeading')
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
	.news{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		animation: fadeContent;
		animation-duration: 1s;
		.newsImage-Container{
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
			.newsHeading{
				position: absolute;
				font-size: 8vw;
				top: 10%;
			}
			.newsShowMore{
				position: absolute;
				bottom: 13%;
				right: 20%;
				transition: 0.7s ease;
				white-space: nowrap;
				font-size: 3.6vw;
				animation-name: newsSlideIn;
				animation-duration: 1.5s;
			}
			.newsShowMoreContainer{
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
    .newsImage-Container:first-child{
      margin-top: 100px;
    }
		.newsImage-Container:nth-child(even){
			.newsHeading{
				right: -10px;
			}
		}
		.newsImage-Container:hover{
			.overlay{
				opacity: 1;
			}
			.newsShowMore{
				right: 18%;
			}
		}
	}
	@keyframes newsSlideIn {
		0%{ opacity: 0; transform: translateX(-100%)}
		100%{ opacity: 1; transform: translateX(0%)}
	}
	@media only screen and (min-width: 768px) {
		.news{
			min-height: calc(100vh - 194px);
			.newsImage-Container{
				img{
					margin: 0px;
					width: 100%;
				}
				.overlay{
					left: 0;
					width: 100%;
				}
				.newsShowMoreContainer{
					img{
						width: 8.6vw;
						margin: 0px 0px 0px 20px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.news{
			margin: 0px 20%;
			.newsImage-Container{
				margin: 80px 0px;
				width: 62%;
        .overlay{
          opacity: 0;
        }
				.newsHeading{
					font-size: 5vw;
				}
				.newsShowMore{
					font-size: 1.4em;
					transition: 0.7s ease;
				}
				.newsShowMoreContainer{
					img{
						width: 3.6vw;
					}
				}
			}
      .newsImage-Container:first-child{
        margin-top: 160px;
      }
			.newsImage-Container:nth-child(even){
				margin-left: auto;
				margin-right: 0px;
				.newsHeading{
					right: -40%;
				}
			}
			.newsImage-Container:nth-child(odd){
				.newsHeading{
					left: -40%;
				}
			}
		}
	}
</style>
