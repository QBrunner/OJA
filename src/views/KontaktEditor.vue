<template>
	<div class="kontaktEditor">
		<div class="kontaktEditorHeadingContainer">
			<h1 class="kontaktEditorHeading">kontaktEditor</h1>
		</div>
		<div class="kontaktEditorFormContainer">
			<div class="kontaktEditorTextContainer">
				<div class="kontaktEditorText" v-for="(text, index) in data.texts" :key="'kontaktEditor-text-' + index">
					<textarea class="col-12" v-model="data.texts[index]"></textarea>
					<div class="switches">
						<a class="switch" @click="moveDown(index)">&#60;</a>
						<a class="switch center" @click="deleteSection(index)">Section Löschen</a>
						<a class="switch right" @click="moveUp(index)">&#62;</a>
					</div>
				</div>
			</div>
			<!--<div class="row no gutters">
				<div class="col-12 col-md-6">
					<p>Name</p>
					<input>
				</div>
				<div class="col-12 col-md-6">
					<p>Email</p>
					<input>
				</div>
			</div>-->
			<div class="kontaktEditorTextContainer">
				<div class="kontaktEditorText">
					<input class="col-12" v-model="data.email"/>
				</div>
			</div>
			<div class="row">
				<textarea class="col-12" id="finishedJson"></textarea>
				<div class="createButton col-6" @click="createSection">
					Section hinzufügen
				</div>
				<div class="createButton col-6" @click="createJson">
					Json generieren
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'kontaktEditor',
		data() {
			return {
				data: {
					texts: [
					],
					email: "",
				}
			}
		},
		methods: {
			moveUp: function(index){
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
			moveDown: function(index){
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
			deleteSection: function(index){
				this.data.texts.splice(index, 1)
			},
			createSection: function(){
				let elem = ""
				this.data.texts.push(elem)
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
			this.data = require('@/assets/Content/Kontakt/kontakt.json')
			//this.text = data.text
			//this.email = data.email
		},
	}
</script>

<style lang="scss">
	.kontaktEditor{
		min-height: calc(100vh - 174px);
		.kontaktEditorHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.kontaktEditorHeading{
				font-size: 65px;
			}
		}
		.kontaktEditorFormContainer{
			margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
			.kontaktEditorTextContainer{
				margin-bottom: 30px;
				.kontaktEditorText{
					margin-bottom: 20px;
					padding: 20px 10px;
					border: 2px solid black;
					border-radius: 7px;
					box-shadow: 5px 10px 20px black;
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
		.button{
			width: 50%;
			border: 1px solid $primary-dark;
			margin: 40px auto 0px auto;
			padding: 7px;
			text-align: center;
			transition: .25s linear;
			cursor: pointer;
		}
		.button:hover{
			border: 1px solid $primary;
		}
		.createButton{
			position: relative;
			transition: 0.5s ease;
			padding: 20px 10px;
			border: 2px solid black;
			border-radius: 7px;
			box-shadow: 5px 10px 20px black;
			margin: 5px 0px 40px 0px;
			cursor: pointer;
			text-align: center;
			display: block;
		}
		.createButton:hover{
			scale: 1.02;
		}
	}
	@media only screen and (min-width: 768px) {
		.kontaktEditor{
			min-height: calc(100vh - 184px);
			.kontaktEditorHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
			.kontaktEditorFormContainer{
				margin-left: 80px;
				margin-top: 30px;
				margin-right: 90px;
			}
			.button{
				width: 250px;
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.kontaktEditor{
			.kontaktEditorHeadingContainer{
				.kontaktEditorHeading{
					font-size: 9em;
				}
			}
			.kontaktEditorFormContainer{
				.kontaktEditorTextContainer{
					margin-bottom: 60px;
				}
				margin-left: 20%;
				margin-top: 30px;
				margin-right: 20%;
				font-size: 1.5em;
			}
			.button{
				font-size: 1.5em;
			}
		}
	}
</style>
