<template>
	<div class="podcastEditor">
		<div class="podcastEditorHeadingContainer">
			<input placeholder="Title" class="podcastEditorHeading" v-model="data.title"/>
		</div>
		<div class="podcastEditorContainer editorBorder">
			<div class="editorBorder" v-for="(description, index) in data.descriptions" :key="'description-' + index">
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
		<div class="podcastEditorContainer editorBorder">
			<div class="podcastOverview editorBorder" v-for="(audio, id) in data.audios" :key="'Audio' + id">
				<select class="newsEditorField" v-model="selections[id]" v-on:change="changeAudio(id)">
					<option disabled value="">Please select one</option>
					<option v-for="(file, fileId) in audioFiles" :key="'podcastEditorOption-' + fileId">
						{{ file }}
					</option>
				</select>
				<div class="switches">
					<a class="switch" @click="moveAudioDown(id)">&#60;</a>
					<a class="switch center" @click="deleteAudioSection(id)">Section Löschen</a>
					<a class="switch right" @click="moveAudioUp(id)">&#62;</a>
				</div>
			</div>
			<div class="createButton col-6" @click="createAudioSection">
				Section hinzufügen
			</div>
		</div>
		<div class="podcastEditorContainer editorBorder row">
      <textarea class="col-12 jsonContainer" id="finishedJson"></textarea>
			<div class="createButton col-6" @click="createJson">
				Json generieren
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
				files: [],
				selections: [],
				imported: [],
				alreadyExists: false
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
			moveAudioUp: function(index){
				if(index < this.data.audios.length - 1){
					let arr = this.data.audios.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.audios[index + 1]
					this.data.audios = []
					arr.forEach( elem => {
						this.data.audios.push(elem)
					})
					let arrSelection = this.selections.slice(0)
					arrSelection[index + 1] = arrSelection[index]
					arrSelection[index] = this.selections[index + 1]
					this.selections = []
					arrSelection.forEach( elem => {
						this.selections.push(elem)
					})
				}
			},
			moveAudioDown: function(index){
				if(index > 0){
					let arr = this.data.audios.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.audios[index - 1]
					this.data.audios = []
					arr.forEach( elem => {
						this.data.audios.push(elem)
					})
					let arrSelection = this.selections.slice(0)
					arrSelection[index - 1] = arrSelection[index]
					arrSelection[index] = this.selections[index - 1]
					this.selections = []
					arrSelection.forEach( elem => {
						this.selections.push(elem)
					})
				}
			},
			deleteAudioSection: function(index){
				this.data.audios.splice(index, 1)
				this.selections.splice(index, 1)
			},
			createAudioSection: function(){
				this.data.audios.push("")
				this.selections.push("")
			},
			changeAudio: function(id){
				this.data.audios[id] = this.selections[id]
			},
			createJson: function(){
				let textarea = document.getElementById('finishedJson')
				if(this.alreadyExists){
					let index = 0;
					for(let i = 0; i != this.imported.length; i++){
						if(this.imported[i].link === this.data.link){
							index = i
						}
					}
					this.imported[index] = this.data
				}
				else {
					this.imported.push(this.data)
				}
				let data = JSON.stringify(this.imported)
				textarea.value = data
				textarea.select()
				document.execCommand("copy")
			}
		},
		created(){
			this.imported = require('@/assets/Content/Podcasts/Podcast/podcast.json')
			let obj = this.imported.find(o => o.link === this.$route.params.name)
			if(obj){
				this.data = obj
				this.alreadyExists = true
				//console.log('found obj')
			}
			else{
				this.data.link = this.$route.params.name
			}

			let audioFiles = require.context(
				'@/assets/Audio',
				true,
				/^.*\.*$/
			)
			this.audioFiles = audioFiles.keys()
			for(let i = 0; i != this.audioFiles.length; i++){
				this.audioFiles[i] = this.audioFiles[i].substring(2)
			}

			this.selections = []
			for(let i = 0; i != this.data.audios.length; ++i){
				this.selections.push(this.data.audios[i])
			}
		}
	}
</script>

<style lang="scss">
	.podcastEditor{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.podcastEditorHeadingContainer{
			width: 70%;
			margin: 130px auto 30px auto;
			.podcastEditorHeading{
				width: 100%;
				font-size: 3em;
			}
		}
		.podcastEditorContainer{
			width: 70%;
			margin: 50px auto;
			.podcastEditorImageContainer{
				margin: 50px 0px;
			}
		}
		.editorBorder{
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			box-shadow: 5px 10px 20px black;
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
		.createButton{
			position: relative;
			transition: 0.5s ease;
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			box-shadow: 5px 10px 20px black;
			margin: 40px auto;
			cursor: pointer;
			text-align: center;
			display: block;
		}
		.createButton:hover{
			scale: 1.02;
		}
	}
	@media only screen and (min-width: 768px) {
		.root{
			min-height: calc(100vh - 194px);
		}
	}
	@media only screen and (min-width: 992px) {
	}
</style>
