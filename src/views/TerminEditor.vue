<template>
	<div class="galleryEditor" id="gallery">
		<div class="galleryNameEditorHeadingContainer editorBorder">
			<input placeholder="Title" class="galleryNameEditorHeading" v-model="data.title"/>
		</div>
		<div class="galleryNameEditorContainer">
			<div class="editorBorder">
				<div class="editorBorder" v-for="(text, id) in data.texts" :key="'gallery-text-' + id">
					<textarea class="col-12" placeholder="Text" v-model="data.texts[id]"></textarea>
					<div class="switches">
						<a class="switch" @click="moveTextDown(id)">&#60;</a>
						<a class="switch center" @click="deleteTextSection(id)">Section Löschen</a>
						<a class="switch right" @click="moveTextUp(id)">&#62;</a>
					</div>
				</div>
				<div class="createButton col-6" @click="createTextSection">
					Section hinzufügen
				</div>
			</div>
			<div class="galleryNameEditorImageContainer editorBorder">
				<div v-for="(data, id) in data.images" :key="'galleryNameEditorContainer-' + id" class="editorBorder">
					<select class="newsEditorField" v-model="selections[id]" v-on:change="changeImage(id)">
						<option disabled value="">Please select one</option>
						<option v-for="(file, fileId) in imageFiles" :key="'galleryNameEditorOption-' + fileId">
							{{ file }}
						</option>
					</select>
					<div class="switches">
						<a class="switch" @click="moveImageDown(id)">&#60;</a>
						<a class="switch center" @click="deleteImageSection(id)">Section Löschen</a>
						<a class="switch right" @click="moveImageUp(id)">&#62;</a>
					</div>
				</div>
				<div class="createButton col-6" @click="createImageSection">
					Section hinzufügen
				</div>
			</div>
			<div class="galleryNameEditorContainer row">
				<textarea class="col-12" id="finishedJson"></textarea>
				<div class="createButton col-6" @click="createJson">
					Json generieren
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'galleryNameEditor',
		data() {
			return {
				lastId: '',
				closing: false,
				data: {
					title: "",
					texts: [
					],
					images: [],
					link: ""
				},
				imageFiles: [],
				selections: [],
				imported: [],
				alreadyExists: false
			}
		},
		methods: {
			moveTextUp: function(index){
				if(index < this.data.texts.length - 1){
					let arr = this.data.texts.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.texts[index + 1]
					this.data.texts = []
					arr.forEach( elem => {
						this.data.texts.push(elem)
					})
				}
			},
			moveTextDown: function(index){
				if(index > 0){
					let arr = this.data.texts.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.texts[index - 1]
					this.data.texts = []
					arr.forEach( elem => {
						this.data.texts.push(elem)
					})
				}
			},
			deleteTextSection: function(index){
				this.data.texts.splice(index, 1)
			},
			createTextSection: function(){
				let elem = ""
				this.data.texts.push(elem)
			},
			moveImageUp: function(index){
				if(index < this.data.images.length - 1){
					let arr = this.data.images.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.images[index + 1]
					this.data.images = []
					arr.forEach( elem => {
						this.data.images.push(elem)
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
			moveImageDown: function(index){
				if(index > 0){
					let arr = this.data.images.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.images[index - 1]
					this.data.images = []
					arr.forEach( elem => {
						this.data.images.push(elem)
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
			deleteImageSection: function(index){
				this.data.images.splice(index, 1)
				this.selections.splice(index, 1)
			},
			createImageSection: function(){
				this.data.images.push("")
				this.selections.push("")
			},
			changeImage: function(id){
				this.data.images[id] = this.selections[id]
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
			this.imported = require('@/assets/Content/Termine/TermineSubpages/subpages.json')
			let obj = this.imported.find(o => o.link === this.$route.params.name)
			if(obj){
				this.data = obj
				this.alreadyExists = true
				//console.log('found obj')
			}
			else{
				this.data.link = this.$route.params.name
			}
			let imageFiles = require.context(
				'@/assets/Images',
				true,
				/^.*\.*$/
			)
			this.imageFiles = imageFiles.keys()
			for(let i = 0; i != this.imageFiles.length; i++){
				this.imageFiles[i] = this.imageFiles[i].substring(2)
			}

			this.selections = []
			for(let i = 0; i != this.data.images.length; ++i){
				this.selections.push(this.data.images[i])
			}
		}
	}
</script>

<style lang="scss">
	.galleryEditor{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.galleryNameEditorHeadingContainer{
			width: 70%;
			margin: 130px auto 30px auto;
			.galleryNameEditorHeading{
				width: 100%;
				font-size: 3em;
			}
		}
		.galleryNameEditorContainer{
			width: 70%;
			margin: 50px auto;
			.galleryNameEditorImageContainer{
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
