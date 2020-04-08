<template>
	<div class="kontakt">
		<div class="kontaktHeadingContainer">
			<h1 class="kontaktHeading">Kontakt</h1>
		</div>
		<div class="kontaktFormContainer">
			<div class="kontaktTextContainer">
				<p class="kontaktText" v-for="(text, index) in data.texts" :key="'kontakt-text-' + index">
					{{ text }}
				</p>
			</div>
			<div class="row no gutters">
				<div class="col-12 col-md-6">
					<p>Name</p>
					<input>
				</div>
				<div class="col-12 col-md-6">
					<p>Email</p>
					<input>
				</div>
			</div>
			<div class="row no gutters">
				<div class="col-12">
					<p>Nachricht</p>
					<textarea></textarea>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="button">abschicken</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'kontakt',
		data() {
			return {
				data: {
					texts: [
						`Immer unter dem Motto: „Don’t hesitate to say hello!“.`,
						`Falls ihr Fragen, Anliegen, Anregungen, Wünsche habt,
						dann könnt ihr uns jederzeit via Facebook und Instagram eine Nachricht
						zukommen lassen.`,
						`Ansonsten besteht die Möglichkeit unseren Jugendsekretär
						Patrick telefonisch unter +49 (0) 176 20424016, via Mail unter
						Patrick.Grabanyi@igmetall.de zu kontaktieren. Die Geschäftsstelle
						der IG Metall Weilheim ist per Mail unter weilheim@igmetall.de oder unter
						Berücksichtigung der Öffnungszeiten persönlich zu erreichen.`
					],
					email: "",
				}
			}
		},
		methods: {
			stringify: function(){
				window.console.log(this.data)
			}
		},
		created(){
			//let data = JSON.parse(require('@/assets/Content/Kontakt/kontakt.json'))
			//this.text = data.text
			//this.email = data.email
		}
	}
</script>

<style lang="scss">
	.kontakt{
		min-height: calc(100vh - 174px);
		.kontaktHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.kontaktHeading{
				font-size: 65px;
			}
		}
		.kontaktFormContainer{
			margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
			.kontaktTextContainer{
				margin-bottom: 30px;
				.kontaktText{
					margin-bottom: 20px;
				}
			}
			textarea{
				background: $background;
				border: 1px solid $primary-dark;
				height: 200px;
				width: 100%;
				color: $primary;
				transition: .25s linear;
			}
			textarea:focus{
				border: 1px solid $primary;
			}
			input{
				margin-bottom: 20px;
				background: $background;
				border: none;
				width: 100%;
				border-bottom: 1px solid $primary-dark;
				color: $primary;
				transition: .25s linear;
			}
			input:focus{
				border-bottom: 1px solid $primary;
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
	}
	@media only screen and (min-width: 768px) {
		.kontakt{
			min-height: calc(100vh - 184px);
			.kontaktHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
			.kontaktFormContainer{
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
		.kontakt{
			.kontaktHeadingContainer{
				.kontaktHeading{
					font-size: 9em;
				}
			}
			.kontaktFormContainer{
				.kontaktTextContainer{
					margin-bottom: 60px;
				}
				margin-left: 20%;
				margin-top: 30px;
				margin-right: 20%;
				font-size: 1.5em;
				input{
					margin-bottom: 13%;
				}
			}
			.button{
				font-size: 1.5em;
			}
		}
	}
</style>
