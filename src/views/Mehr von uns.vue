<template>
	<div class="mehrvonuns">
		<div class="moreWrapper" v-for="(section, index) in data" :key="'more-' + index">
			<h2>{{ section.heading }}</h2>
			<p>
				{{ section.text }}
			</p>
			<div class="pdfSection row no-gutters">
				<div class="col pdfDownload" v-for="(pdf, id) in section.pdfSection" :key="'pdf-' + id" @click="downloadDocument(pdf.downloadFile, pdf.downloadTitle)">{{ pdf.downloadText }}</div>
			</div>
			<div class="pdfSection row no-gutters">
				<a class="col pdfDownload" v-for="(link, id) in section.links" :key="'link-' + id" :href="link.link" target="_blank">{{ link.linkText }}</a>
			</div>
		</div>
		<!--
		<div @click="stringify()">
			stringify
		</div>
		<input type="text" value="" id="stringify">-->
	</div>
</template>

<script>
	export default {
		name: 'mehr',
		data() {
			return {
				data: [
					{ heading: "Beitrittsformular", text: "Beitrittsformular text",
					pdfSection:
						[
							{downloadText: "Download Deutsch", downloadTitle:"Beitrittsformular deutsch.pdf", downloadFile: ""},
							{downloadText: "Download Englisch", downloadTitle:"Beitrittsformular englisch.pdf", downloadFile: ""},

						],
					links:
						[
						]
					},
					{ heading: "Test heading", text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
					pdfSection:
						[
						],
					links:
						[
							{linkText: "Facebook", link: "https://www.facebook.com/OJAWeilheim/"}
						]
					}
				],
				pdfs: []
			}
		},
		methods: {
			downloadDocument: function(data, title){
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
				var a = document.createElement("a") //Create <a>
				a.href = data //Image Base64 Goes here
				a.download = title //File name Here
				a.click()
			},
			stringify: function(){
				let text = JSON.stringify(this.data)
				window.console.log(text)
				let input = document.getElementById('stringify')
				input.value = text
				input.select()
				document.execCommand("copy")
			}
		},
		created(){
			this.data = require('@/assets/Content/Mehr von uns/mehr_von_uns.json')
		}
	}
</script>

<style lang="scss">
	.mehrvonuns{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.moreWrapper{
			padding-top: 40px;
			padding-bottom: 20px;
			h2{
				text-decoration: underline;
			}
			p{
				margin: 10px 0px 10px 10px;
			}
			.pdfSection{
				.pdfDownload{
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
				.pdfDownload:hover{
					scale: 1.02;
				}
			}
		}
	}
	@media only screen and (min-width: 768px) {
		.mehrvonuns{
			min-height: calc(100vh - 194px);
			.moreWrapper{
				.pdfSection{
					.pdfDownload{
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
			.moreWrapper{
				width: 900px;
				margin: auto;
				.pdfSection{
					.pdfDownload{
						min-width: calc(33% - 15px);
						margin: 5px;
					}
				}
			}
		}
	}
</style>
