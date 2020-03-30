<template>
	<div class="podcast">
		<div class="podcastHeadingContainer">
			<h1 class="podcastHeading">{{ data.title }}</h1>
		</div>
		<div class="podcastDescription">
			<p>
				{{ data.description }}
			</p>
		</div>
		<div class="podcastAudioContainer">
			<div class="podcastOverview" v-for="(audio, id) in data.audios" :key="'Audio' + id">
				<audio controls>
					<source :src="require(`@/assets/Audio/${audio}`)" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'podcast',
		data() {
			return {
				data: {
					title: "",
					link: "",
					description: ``,
					audios: []
				}
			}
		},
		methods: {
			stringify: function(){
				let arr = []
				arr.push(this.data)
				let text = JSON.stringify(arr)
				window.console.log(text)
				let input = document.getElementById('stringify')
				input.value = text
				input.select()
				document.execCommand("copy")
			}
		},
		created(){
			let imported = require('@/assets/Podcasts/Podcast/podcast.json')
			let obj = imported.find(o => o.link === this.$route.params.name)
			if(obj){
				this.data = obj
			}
		}
	}
</script>

<style lang="scss">
	.podcast{
		min-height: calc(100vh - 174px);
		.podcastHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.podcastHeading{
				font-size: 65px;
			}
		}
		.podcastDescription,
		.podcastAudioContainer{
			margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
			.podcastOverview{
        position: relative;
        transition: 0.5s ease;
        padding: 20px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        margin: 20px 0px;
				audio{
					width: 100%;
					background: black;
				}
      }
		}
	}
	@media only screen and (min-width: 768px) {
		.podcast{
			min-height: calc(100vh - 194px);
			.podcastHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
			.podcastDescription,
			.podcastAudioContainer{
				margin-left: 80px;
				margin-top: 30px;
				margin-right: 90px;
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.podcast{
			.podcastHeadingContainer{
				.podcastHeading{
					font-size: 9em;
				}
			}
			.podcastDescription,
			.podcastAudioContainer{
				margin-left: 20%;
				margin-top: 30px;
				margin-right: 12%;
				font-size: 1.5em;
			}
		}
	}
</style>
