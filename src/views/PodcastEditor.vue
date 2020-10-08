<template>
	<div class="podcast">
		<div class="podcastHeadingContainer">
			<h1 class="podcastHeading">{{ data.title }}</h1>
		</div>
		<div class="podcastDescription">
			<div class="podcastTextSection" v-for="(description, index) in data.descriptions" :key="'description-' + index">
				<textarea class="col-12" v-model="data.descriptions[index]"></textarea>
				<div class="switches">
					<a class="switch" @click="moveTextDown(index)">&#60;</a>
					<a class="switch center" @click="deleteTextSection(index)">Section Löschen</a>
					<a class="switch right" @click="moveTextUp(index)">&#62;</a>
				</div>
			</div>
			<div class="createButton col-6" @click="createTextSection">
				Section hinzufügen
			</div>
		</div>
		<div class="podcastAudioContainer">
			<div class="podcastOverview" v-for="(audio, id) in data.audios" :key="'Audio' + id">
				<select v-model="data.audios">
					<option v-for="(file, id) in files" :key="'File' + id">{{ file }}</option>
				</select>
				<!--<audio controls>
					<source :src="require(`@/assets/Audio/${data.audios[id]}`)" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>-->
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
					descriptions: [],
					audios: []
				},
				files: []
			}
		},
		methods: {
			moveTextUp: function(index){
				if(index < this.data.descriptions.length - 1){
					let arr = this.data.descriptions.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.descriptions[index + 1]
					this.data.descriptions = []
					arr.forEach( elem => {
						this.data.descriptions.push(elem)
					})
				}
			},
			moveTextDown: function(index){
				if(index > 0){
					let arr = this.data.descriptions.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.descriptions[index - 1]
					this.data.descriptions = []
					arr.forEach( elem => {
						this.data.descriptions.push(elem)
					})
				}
			},
			deleteTextSection: function(index){
				this.data.descriptions.splice(index, 1)
			},
			createTextSection: function(){
				let elem = ""
				this.data.descriptions.push(elem)
			},
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
			let imported = require('@/assets/Content/Podcasts/Podcast/podcast.json')
			let obj = imported.find(o => o.link === this.$route.params.name)
			if(obj){
				this.data = obj
				console.log('found obj')
			}
			else{
				this.data.link = this.$route.params.name
			}

			let audioFiles = require.context(
				'@/assets/Audio',
				true,
				/^.*\.mp3$/
			)
			console.log(audioFiles.keys())
			this.files = audioFiles.keys()
			console.log(this.data)
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
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			.podcastTextSection{
				padding: 20px 10px;
				border: 2px solid black;
				border-radius: 7px;
			}
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
		.createButton{
			position: relative;
			transition: 0.5s ease;
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			box-shadow: 5px 10px 20px black;
			margin: 10px auto 0px auto;
			cursor: pointer;
			text-align: center;
			display: block;
		}
		.switches{
			width: 100%;
			position: relative;
			height: 30px;
			margin-bottom: 50px;
			.switch{
				position: absolute;
				font-size: 40px;
				cursor: pointer;
			}
			.right{
				right: 0px;
			}
			.center{
				left: 50%;
				transform: translate(-50%, 0%)
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
