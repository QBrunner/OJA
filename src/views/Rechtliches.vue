<template>
	<div class="impressum">
		<div class="impressumWrapper">
			<div class="impressumSection" v-for="(section, index) in sections" :key="'impressum' + index">
				<input class="heading" v-model="section.heading"/>
				<textarea v-model="section.text"></textarea>
				<div class="switches">
					<a class="switch" @click="moveDown(index)">&#60;</a>
					<a class="switch center" @click="deleteSection(index)">Section Löschen</a>
					<a class="switch right" @click="moveUp(index)">&#62;</a>
				</div>
			</div>
			<div class="row">
				<div class="createButton col-6" @click="createJson">
					Json generieren
				</div>
				<div class="createButton col-6" @click="createSection">
					Section hinzufügen
				</div>
			</div>
			<textarea id="finishedJson"></textarea>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'impressum',
		data() {
			return {
				sections: [
				],
			}
		},
		methods: {
			createJson: function(){
				let textarea = document.getElementById("finishedJson")
				let sections = JSON.stringify(this.sections)
				textarea.value = JSON.stringify(sections)
				textarea.select()
				document.execCommand("copy")
			},
			moveUp: function(index){
				if(index < this.sections.length - 1){
					let arr = this.sections.slice(0)
					arr[index + 1] = arr[index]
					arr[index] = this.sections[index + 1]
					this.sections = []
					arr.forEach( elem => {
						this.sections.push(elem)
					})
				}
			},
			moveDown: function(index){
				if(index > 0){
					let arr = this.sections.slice(0)
					arr[index - 1] = arr[index]
					arr[index] = this.sections[index - 1]
					this.sections = []
					arr.forEach( elem => {
						this.sections.push(elem)
					})
				}
			},
			deleteSection: function(index){
				this.sections.splice(index, 1)
			},
			createSection: function(){
				let elem = {heading: "", text: ""}
				this.sections.push(elem)
			}
		},
		created(){
			let impressum = JSON.parse(require('@/assets/Content/Impressum/impressum.json'))
			let datenschutz = JSON.parse(require('@/assets/Content/Datenschutz/datenschutz.json'))
			if(this.$route.params.name === 'impressum'){
				this.sections = impressum
			}
			else{
				this.sections = datenschutz
			}
		}
	}
</script>

<style lang="scss">
	.impressum{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.impressumWrapper{
			padding-top: 30px;
			.impressumSection{
				margin-bottom: 40px;
				position: relative;
        transition: 0.5s ease;
        padding: 20px 10px 35px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        margin: 5px 0px 40px 0px;
        cursor: pointer;
        display: block;
				.heading{
					width: 100%;
					margin-bottom: 20px;
				}
				textarea{
					width: 100%;
					min-height: 200px;
				}
				.switches{
					width: 100%;
					position: relative;
					height: 30px;
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
			.impressumSection:last-child {
				margin-bottom: 0px;
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
			#finishedJson{
				width: 100%;
			}
		}
	}
	@media only screen and (min-width: 768px) {
		.impressum{
			min-height: calc(100vh - 194px);
			.impressumWrapper{
				padding-top: 40px;
				width: 80%;
				margin: 0px 100px 0px auto;
			}
		}
	}

</style>
