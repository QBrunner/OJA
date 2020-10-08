<template>
  <div class="podcastsEditor">
    <div class="podcastsEditorHeadingContainer">
			<h1 class="podcastsEditorHeading">Podcasts Editor</h1>
		</div>
    <div class="podcastsEditorTextWrapper">
      <div class="podcastsEditorTextContainer">
        <div class="podcastsEditorText" v-for="(text, index) in data.texts" :key="'kontakt-text-' + index">
          <textarea class="col-12" v-model="data.texts[index]"></textarea>
					<div class="switches">
						<a class="switch" @click="moveMainDown(index)">&#60;</a>
						<a class="switch center" @click="deleteMainSection(index)">Section Löschen</a>
						<a class="switch right" @click="moveMainUp(index)">&#62;</a>
					</div>
        </div>
				<div class="createButton col-6" @click="createMainSection">
					Section hinzufügen
				</div>
      </div>

    </div>
    <div class="podcastsEditorContainer row">
      <div class="col podcastsEditorOverview" v-for="(podcast, index) in data.podcasts" :key="'podcast-' + index">
				<div class="col-12">
					<input placeholder="Title" class="col-12 heading" v-model="data.podcasts[index].title"/>
				</div>
				<div class="col-12">
					<textarea placeholder="Beschreibung" class="col-12" v-model="data.podcasts[index].text"></textarea>
				</div>
				<div class="col-12">
					<input placeholder="link" class="col-12 heading" v-model="data.podcasts[index].link"/>
				</div>
				<div class="switches">
					<a class="switch" @click="moveDown(index)">&#60;</a>
					<a class="switch center" @click="deleteSection(index)">Section Löschen</a>
					<a class="switch right" @click="moveUp(index)">&#62;</a>
				</div>
        <div class="createButton col-6" @click="$router.push({ name: 'editor-podcast', params: { name: podcast.link }}).catch(err => {})">
					Link folgen
				</div>
      </div>
			<div class="createButton col-6" @click="createSection">
				Section hinzufügen
			</div>
    </div>
    <div class="podcastsEditorContainer row">
      <textarea class="jsonContainer" id="finishedJson"></textarea>
			<div class="createButton col-6" @click="createJson">
				Json generieren
			</div>
      <div class="col-12">
        <p v-for="(route, index) in existingRoutes" :key="'existingRoutes-' + index">
          {{ route.title }} --- {{ route.link }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'podcasts',
		data() {
			return {
        data: {
          texts: [
          ],
          podcasts: [
            {title: '', text: ``, link: ''}
          ]
        },
        existingRoutes: [],
			}
		},
		methods: {
			moveMainUp: function(index){
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
			moveMainDown: function(index){
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
			deleteMainSection: function(index){
				this.data.texts.splice(index, 1)
			},
			createMainSection: function(){
				let elem = ""
				this.data.texts.push(elem)
			},
			moveUp: function(index){
				if(index < this.data.podcasts.length - 1){
					let arr = this.data.podcasts.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.data.podcasts[index + 1]
					this.data.podcasts = []
					arr.forEach( elem => {
						this.data.podcasts.push(elem)
					})
				}
			},
			moveDown: function(index){
				if(index > 0){
					let arr = this.data.podcasts.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.data.podcasts[index - 1]
					this.data.podcasts = []
					arr.forEach( elem => {
						this.data.podcasts.push(elem)
					})
				}
			},
			deleteSection: function(index){
				this.data.podcasts.splice(index, 1)
			},
			createSection: function(){
				let elem = {title: "", text: "", link: "",}
				this.data.podcasts.push(elem)
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
			this.data = require('@/assets/Content/Podcasts/podcasts.json')
      let imported = require('@/assets/Content/Podcasts/Podcast/podcast.json')
      let arr = []
      for(let i = 0; i != imported.length; ++i){
        let obj = {link: imported[i].link, title: imported[i].title}
        arr.push(obj)
      }
      this.existingRoutes = arr
		}
	}
</script>

<style lang="scss">
  .podcastsEditor{
    min-height: calc(100vh - 174px);
    margin: 0px;
    .podcastsEditorHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.podcastsEditorHeading{
				font-size: 65px;
			}
		}
    .podcastsEditorTextWrapper{
      margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
      .podcastsEditorTextContainer{
        margin-bottom: 30px;
				padding: 20px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        .podcastsEditorText{
          margin-bottom: 20px;
        }
      }
    }
    .podcastsEditorContainer{
      width: 80%;
      margin: auto;
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			box-shadow: 5px 10px 20px black;
			.heading{
				margin: 10px 0px;
			}
      .podcastsEditorOverview{
        position: relative;
        margin: 5px 0px;
        min-width: 100%;
				border: 2px solid black;
				padding: 20px 10px;
				border-radius: 7px;
        h2{
          text-decoration: underline;
        }
        p{
          margin: 10px 0px 10px 10px;
        }
      }
    }
    .jsonContainer{
      width: 80%;
      margin: auto;
      margin-top: 30px;
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
		.createButton:hover{
			scale: 1.02;
		}
  }
  @media only screen and (min-width: 768px) {
		.podcastsEditor{
			min-height: calc(100vh - 194px);
      .podcastsEditorHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
      .podcastsEditorTextWrapper{
				margin-left: 80px;
				margin-top: 30px;
				margin-right: 90px;
			}
    }
  }
  @media only screen and (min-width: 992px) {
    .podcastsEditor{
      .podcastsEditorHeadingContainer{
				.podcastsEditorHeading{
					font-size: 9em;
				}
			}
      .podcastsEditorTextWrapper{
        margin-left: 20%;
				margin-top: 30px;
				margin-right: 20%;
				font-size: 1.5em;
        .podcastsEditorHeadingContainer{
          margin-bottom: 60px;
        }
      }
    }
  }
</style>
