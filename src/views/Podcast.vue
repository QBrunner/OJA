<template>
	<div class="podcast">
		<div class="podcastHeadingContainer">
			<h1 class="podcastHeading">{{ title }}</h1>
		</div>
		<div class="podcastDescription">
			<p>
				{{ description }}
			</p>
		</div>
		<div class="podcastAudioContainer">
			<div class="podcastOverview" v-for="(audio, id) in audios" :key="'Audio' + id">
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
				title: "Aktion Respekt",
				description: `Aktion Respekt. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				audios: [ "Rassismus Schilder 1.mp3", "Rassismus Schilder 2.mp3"]
			}
		},
		methods: {
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
