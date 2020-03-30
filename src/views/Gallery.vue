<template>
  <div class="gallery" id="gallery">
		<div class="galleryNameCompleteOverlay"  @click="closeModal"></div>
		<div class="galleryNamePartialOverlay"></div>
		<div class="galleryNameHeadingContainer">
			<h1 class="galleryNameHeading">{{ $route.params.name }}</h1>
		</div>
		<div class="galleryNameGalleryContainer">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<div class="galleryNameImage-Container row no-gutters">
				<div v-for="(data, id) in images" :id="'galleryNameContainer-' + id" :key="'galleryNameContainer-' + id" class="col-12 col-lg-6 col-xl-4 galleryNameImage-ContainerInner" @click="openModal(id)">
					<img class="galleryNameImage" :src="require(`@/assets/testing/${data}`)">
					<div class="galleryNameOverlay"><img class="galleryNamePfeilQuadrat" src="@/assets/Icons/Pfeil_Quadrat.svg"></div>
				</div>
			</div>
			<div class="galleryNameImage-Container row no-gutters">
				<div v-for="(data, id) in images" :id="'Modal-' + id" :key="'Modal-' + id" class="col-12 col-lg-6 col-xl-4 galleryNameImage-ContainerInner galleryNameImageModal">
					<img class="galleryNameImage" :src="require(`@/assets/testing/${data}`)">
					<img class="galleryNameCloseIcon" src="@/assets/Icons/Kreuz.svg" @click="closeModal">
					<div class="galleryNameImageModalRight" @click="next"></div>
					<img class="galleryNameArrowRight" src="@/assets/Icons/Pfeil_nach_rechts.svg" @click="next">
					<div class="galleryNameImageModalLeft" @click="previous"></div>
					<img class="galleryNameArrowLeft" src="@/assets/Icons/Pfeil_nach_links.svg" @click="previous">
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'galleryName',
		data() {
			return {
				lastId: '',
				closing: false,
				images: ['Ice3.jpg', 'Ice1.jpg', 'Ice2.jpg', 'Ice.jpg' ],
			}
		},
		methods: {
			openModal: function(num){
				this.lastId = num
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
				document.getElementById('gallery').classList.toggle('galleryNameCompleteOverlayActive')
			},
			closeModal: function(){
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
				document.getElementById('gallery').classList.toggle('galleryNameCompleteOverlayActive')
			},
			next: function(){
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
				this.lastId++
				if(this.lastId > this.images.length - 1){
					this.lastId = 0
				}
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
			},
			previous: function(){
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
				this.lastId--
				if(this.lastId < 0){
					this.lastId = this.images.length - 1
				}
				document.getElementById('Modal-' + this.lastId).classList.toggle('galleryNameImage-ContainerInner-Modal')
			}
		}
	}
</script>

<style lang="scss">
	.gallery{
		min-height: calc(100vh - 174px);
		.galleryNameHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.galleryNameHeading{
				font-size: 65px;
			}
		}
		.galleryNameGalleryContainer{
			margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
			.galleryNameImage-Container{
				position: relative;
				margin: 20px 0px;
				.galleryNameImage-ContainerInner{
					width: 100%;
					margin-bottom: 30px;
					display: inline-table;
					.galleryNameImage{
						width: inherit;
					}
					.galleryNameCloseIcon{
						position: absolute;
						top: 0%;
						left: 50%;
						transform: translate(-50%, -50%);
						opacity: 0;
						z-index: -1;
					}
					.galleryNameArrowLeft{
						width: 40px;
						position: absolute;
						top: 105%;
						left: 0%;
						opacity: 0;
						z-index: -1;
					}
					.galleryNameArrowRight{
						width: 40px;
						position: absolute;
						top: 105%;
						right: 0%;
						opacity: 0;
						z-index: -1;
					}
					.galleryNameImageModalRight{
						top: 0px;
						position: absolute;
						width: 30%;
						height: 100%;
						right: 0px;
						z-index: -1;
					}
					.galleryNameImageModalLeft{
						top: 0px;
						position: absolute;
						width: 30%;
						height: 100%;
						left: 0px;
						bottom: 0px;
						z-index: -1;
					}
					.galleryNameOverlay{
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
						opacity: 0;
						background: rgba($background,0.5);
						transition: .5s ease;
						.galleryNamePfeilQuadrat{
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							transition: 0.5s $easeInOutBack;
						}
					}
					.galleryNameOverlay:hover{
						opacity: 1;
						.galleryNamePfeilQuadrat{
							transform: translate(-50%, -50%) scale(1.3);
						}
					}
				}
				.galleryNameImageModal{
					display: none;
				}
				.galleryNameImage-ContainerInner-Modal{
					display: block;
					position: fixed;
					z-index: 202;
					max-width: 80%;
					width: auto;
					max-height: calc(100% - 140px);
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					animation-name: galleryModalFadeIn;
					animation-duration: 1.5s;
					padding: 0px;
					.galleryNameOverlay{
						transition: 0s;
						opacity: 0;
					}
					.galleryNameOverlay:hover{
						opacity: 0;
					}
					.galleryNameImage{
						max-height: calc(100vh - 140px);
						max-width: 80vw;
					}
					.galleryNameCloseIcon, .galleryNameArrowLeft, .galleryNameArrowRight{
						opacity: 1;
						transition: 0.5s ease;
						transition-delay: 0.5s;
						cursor: pointer;
						z-index: 203;
						transition-property: opacity;
					}
					.galleryNameImageModalLeft, .galleryNameImageModalRight{
						z-index: 203;
					}
				}
			}
		}
		.galleryNamePartialOverlay{
			position: fixed;
			width: 100%;
			height: 100%;
			transition: 0.5s ease;
			transition-property: opacity;
			opacity: 0;
			background: $background;
			z-index: -1;
		}
	}
	.galleryNameCompleteOverlayActive{
		.galleryNameCompleteOverlay{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 201;
			background: rgba($background,0.5);
			transition: 0.5s;
		}
		.galleryNamePartialOverlay{
			z-index: 200;
			//background: rgba($background, 1.0);
			opacity: 1;
		}
	}
	@keyframes galleryModalFadeIn {
		0%{ opacity: 0; }
		100%{ opacity: 1; }
	}
	@media only screen and (min-width: 768px) {
		.gallery{
			min-height: calc(100vh - 194px);
			.galleryNameHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
			.galleryNameGalleryContainer{
				margin-left: 80px;
				margin-top: 30px;
				margin-right: 90px;
				.galleryNameImage-Container{
					.galleryNameImage-ContainerInner{
						margin-bottom: 60px;
					}
					.galleryNameImage-ContainerInner-Modal{
						padding: 0px;
						.galleryNameArrowLeft{
							top: 50%;
							left: 0%;
							transform: translate(-50%, -50%);
						}
						.galleryNameArrowRight{
							top: 50%;
							right: 0%;
							transform: translate(50%, -50%);
						}
					}
				}
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.gallery{
			.galleryNameHeadingContainer{
				.galleryNameHeading{
					font-size: 9em;
				}
			}
			.galleryNameGalleryContainer{
				margin-left: 20%;
				margin-top: 30px;
				margin-right: 12%;
				font-size: 1.5em;
				.galleryNameImage-Container{
					.galleryNameImage-ContainerInner{
						padding: 0px 60px 0px 0px;
						.galleryNameOverlay{
							right: 60px;
						}
					}
					.galleryNameImage-ContainerInner-Modal{
						padding: 0px;
					}
				}
			}
		}
	}
</style>
