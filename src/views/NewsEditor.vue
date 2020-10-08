<template>
	<div class="newsEditor">
		<div class="newsEditorSectionWrapper">
			<div class="newsEditorImage-Container" v-for="(element, id) in data.elements" :key="'newsEditor-' + id">
				<div>
					<p>
						Verwendetes Bild: {{ selections[id] }}
					</p>
					<select class="newsEditorField" v-model="selections[id]" v-on:change="changeImage(id)">
						<option disabled value="">Please select one</option>
						<option v-for="(file, fileId) in imageFiles" :key="'newsEditorOption-' + fileId">
							{{ file }}
						</option>
					</select>
					<input placeholder="Title" class="col-12 newsEditorField" v-model="data.elements[id].heading"/>
					<input placeholder="Link" class="col-12 newsEditorField" v-model="data.elements[id].link"/>
					<div class="switches">
						<a class="switch" @click="moveDown(id)">&#60;</a>
						<a class="switch center" @click="deleteSection(id)">Section Löschen</a>
						<a class="switch right" @click="moveUp(id)">&#62;</a>
					</div>
				</div>
				<div class="createButton col-6" @click="$router.push({ name: 'editor-gallery', params: { name: element.link }}).catch(err => {})">
					Link folgen
				</div>
			</div>
			<div>
				<textarea class="col-12 newsEditorJsonContainer" id="finishedJson"></textarea>
				<div class="row">
					<div class="createButton col-6" @click="createSection">
						Section hinzufügen
					</div>
					<div class="createButton col-6" @click="createJson">
						Json generieren
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'newsEditor',
		data() {
			return {
				lastSize: 10000,
				data: {
					elements: [
					]
				},
				imageFiles: [],
				selections: []
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
				let list = document.getElementsByClassName('newsEditorHeading')
				for(let it = 0; it < list.length; it++){
					list[it].style.top = ((Math.random() * 30)) + '%'
				}
			},
			resetHeading: function(){
				let list = document.getElementsByClassName('newsEditorHeading')
				for(let it = 0; it < list.length; it++){
					list[it].style.top = 10 + '%'
				}
			},
			moveUp: function(index){
				if(index < this.data.elements.length - 1){
					let arr = this.data.elements.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.elements[index + 1]
					this.data.elements = []
					arr.forEach( elem => {
						this.data.elements.push(elem)
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
			moveDown: function(index){
				if(index > 0){
					let arr = this.data.elements.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.elements[index - 1]
					this.data.elements = []
					arr.forEach( elem => {
						this.data.elements.push(elem)
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
			createSection: function(){
				let elem = {image: "", heading: "", link:""}
				this.data.elements.push(elem)
				this.selections.push("")
			},
			deleteSection: function(index){
				this.data.elements.splice(index, 1)
				this.selections.splice(index, 1)
			},
			changeImage: function(id){
				this.data.elements[id].image = this.selections[id]
			},
			createJson: function(){
				let textarea = document.getElementById('finishedJson')
				let data = JSON.stringify(this.data)
				textarea.value = data
				textarea.select()
				document.execCommand("copy")
			}
		},
		created() {
			this.data = require('@/assets/Content/News/news.json')
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
			for(let i = 0; i != this.data.elements.length; ++i){
				this.selections.push(this.data.elements[i].image)
			}
			requestAnimationFrame(this.randomizeHeading)
			window.addEventListener('resize', this.resize)
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.resize);
		}
	}
</script>

<style lang="scss">
.newsEditor{
	min-height: calc(100vh - 174px);
	margin: 150px 30px 0px 30px;
	animation: fadeContent;
	animation-duration: 1s;
	.newsEditorSectionWrapper{
		width: 70%;
		margin: auto;
		.newsEditorImage-Container{
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			.newsEditorField{
				margin: 10px 0px;
			}
		}
	}
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
	margin: 5px auto 40px auto;
	cursor: pointer;
	text-align: center;
	display: block;
}
.newsEditorJsonContainer{
	margin: 50px auto 10px auto;
}
</style>
