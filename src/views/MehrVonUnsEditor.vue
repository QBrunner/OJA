<template>
	<div class="mehrvonuns">
		<div class="moreWrapperEditor createButton" v-for="(section, index) in data" :key="'more-' + index">
			<h2>{{ section.heading }}</h2>
			<input class="mehrvonunsEditorSpacer col-12" placeholder="Title" v-model="section.heading"/>
			<div v-for="(text, id) in section.texts" :key="'mva-text-' + index + id">
				<textarea placeholder="Beschreibung" class="col-12" v-model="section.texts[id]"></textarea>
				<div class="switches">
					<a class="center createButton" @click="deleteText(index, id)">Text Löschen</a>
				</div>
			</div>
			<a class="center createButton" @click="addText(index)">Text hinzufügen</a>
			<div class="pdfSection row no-gutters">
				<div class="col pdfDownloadEditor" v-for="(pdf, id) in section.pdfSection" :key="'pdf-' + id">
					<input placeholder="Title" class="col-12 mehrvonunsEditorSpacer" v-model="pdf.downloadText"/>
					<select class="newsEditorField" v-model="selections[id].downloadTitle" v-on:change="changePdf(index, id)">
						<option disabled value="">Please select one</option>
						<option v-for="(file, fileId) in pdfs" :key="'mvuEditorOption-' + fileId">
							{{ file.title }}
						</option>
					</select>
					<a class="center createButton" @click="deletePdf(index, id)">Pdf Löschen</a>
				</div>
				<a class="center createButton col-12" @click="addPdf(index)">Pdf hinzufügen</a>
			</div>
			<div class="pdfSection row no-gutters">
				<div class="col pdfDownloadEditor" v-for="(link, id) in section.links" :key="'link-' + id" :href="link.link" target="_blank">
					{{ link.linkText }} &#x1f517;
					<input placeholder="Link" class="col-12 mehrvonunsEditorSpacer" v-model="link.link"/>
					<input placeholder="Text" class="col-12 mehrvonunsEditorSpacer" v-model="link.linkText"/>
					<a class="center createButton" @click="deleteLink(index, id)">Link Löschen</a>
				</div>
				<a class="center createButton col-12" @click="addLink(index)">Link hinzufügen</a>
			</div>
			<div class="switches">
				<a class="switch left" @click="moveDown(index)">&#60;</a>
				<a class="switch center" @click="deleteSection(index)">Section Löschen</a>
				<a class="switch right" @click="moveUp(index)">&#62;</a>
			</div>
		</div>
		<!--<div @click="stringify()">
			stringify
		</div>
		<input type="text" value="" id="stringify">-->
		<div class="moreWrapperEditor row">
			<textarea class="col-12" id="finishedJson"></textarea>
			<div class="createButton col-6" @click="createSection">
				Section hinzufügen
			</div>
			<div class="createButton col-6" @click="createJson">
				Json generieren
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'mehr',
		data() {
			return {
				data: [{
					heading: "",
					texts: [``],
					pdfSection:
						[
							{downloadText: "", downloadTitle:""},
						],
					links:
						[
							{linkText: "", external: true, link: ""},
						]
					}
				],
				pdfs: []
			}
		},
		methods: {
			downloadDocument: function(title){
				/*let pdf = require('@/assets/Documents/Beitrittsformular deutsch.pdf')
				let pdf2 =require('@/assets/Documents/Beitrittsformular englisch.pdf')
				let text = document.getElementById('pdf')
				let arr = []
				let obj = {text: pdf, title: "Beitrittsformular deutsch.pdf"}
				arr.push(obj)
				let obj2 = {text: pdf2, title: "Beitrittsformular englisch.pdf"}
				arr.push(obj2)
				text.value = JSON.stringify(arr)
				text.select()
				document.execCommand("copy")*/
				//window.console.log(data)
				let data = this.pdfs.find(obj => obj.title == title).base64
				var a = document.createElement("a") //Create <a>
				a.href = data //Image Base64 Goes here
				a.download = title //File name Here
				a.click()
			},
			stringify: function(){
				let text = JSON.stringify(this.data)
				//window.console.log(text)
				let input = document.getElementById('stringify')
				input.value = text
				input.select()
				document.execCommand("copy")
			},
			importAll: function(r){
				let pdfs = []
				r.keys().forEach(((key, id) => {
					if(key){
						let obj = {title: key.substr(2), base64: r.keys().map(r)[id]}
						pdfs.push(obj)
					}
				}))
				this.pdfs = pdfs
				//console.log(this.pdfs)

				this.selections = []
				for(let i = 0; i != this.data.length; ++i){
					for(let j = 0; j != this.data[i].pdfSection.length; ++j){
						this.selections.push(this.data[i].pdfSection[j])
					}
				}
				//console.log(this.selections)
			},
			changePdf: function(i, j){
				this.data[i].pdfSection[j] = this.selections[i * j + j]
			},
			addText: function(i){
				this.data[i].texts.push("")
			},
			deleteText: function(i, j){
				this.data[i].texts.splice(j, 1)
			},
			addLink: function(i){
				let elem = {linkText: "", external: true, link: "link"}
				this.data[i].links.push(elem)
			},
			deleteLink: function(i, j){
				this.data[i].links.splice(j, 1)
			},
			addPdf: function(i){
				let elem = {downloadText: "", link: "downloadTitle"}
				this.data[i].pdfSection.push(elem)
			},
			deletePdf: function(i, j){
				this.data[i].pdfSection.splice(j, 1)
			},
			createSection: function(){
				let elem = {heading: "", texts: [], pdfSection: [], links: []}
				this.data.push(elem)
			},
			deleteSection: function(i){
				this.data.splice(i, 1)
			},
			moveUp: function(index){
				if(index < this.data.length - 1){
					let arr = this.data.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data[index + 1]
					this.data = []
					arr.forEach( elem => {
						this.data.texts.push(elem)
					})
				}
			},
			moveDown: function(index){
				if(index > 0){
					let arr = this.data.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data[index - 1]
					this.data = []
					arr.forEach( elem => {
						this.data.push(elem)
					})
				}
			},
			createJson: function(){
				let textarea = document.getElementById('finishedJson')
				let data = JSON.stringify(this.data)
				textarea.value = data
				textarea.select()
				document.execCommand("copy")
			}
		},
		created(){
			this.data = require('@/assets/Content/Mehr von uns/mehr_von_uns.json')
			this.importAll(require.context('@/assets/Documents/', false, /\.(pdf)$/))
		}
	}
</script>

<style lang="scss">
	.mehrvonuns{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.moreWrapperEditor{
			padding-top: 40px;
			padding-bottom: 20px;
			h2{
				text-decoration: underline;
			}
			p{
				margin: 10px 0px 10px 10px;
			}
			.pdfSection{
				.pdfDownloadEditor{
					position: relative;
					transition: 0.5s ease;
					padding: 20px 10px;
					border: 2px solid black;
					border-radius: 7px;
					box-shadow: 5px 10px 20px black;
					margin: 5px 0px;
					cursor: pointer;
					text-align: center;

					min-width: 100%;
					h2{
						text-decoration: underline;
					}
				}
			}
		}
		.mehrvonunsEditorSpacer{
			margin: 10px 0px;
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
			.left{
				left: 0px;
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
	}
	@media only screen and (min-width: 768px) {
		.mehrvonuns{
			min-height: calc(100vh - 194px);
			.moreWrapperEditor{
				.pdfSection{
					.pdfDownloadEditor{
						min-width: calc(50% - 20px);
						margin: 5px;
					}
				}
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.mehrvonuns{
			min-height: calc(100vh - 194px);
			.moreWrapperEditor{
				width: 900px;
				margin: 20px auto;
				.pdfSection{
					.pdfDownloadEditor{
						min-width: calc(33% - 15px);
						margin: 5px;
					}
				}
			}
		}
	}
</style>
