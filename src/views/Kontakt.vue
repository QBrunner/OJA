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
			<div class="row no gutters">
				<div class="col-12">
					<p>Nachricht:</p>
					<textarea v-model="message"></textarea>
				</div>
			</div>
		</div>
		<div class="row no-gutters" @click="sendMail">
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
					],
					email: "",
				},
				message: "",
			}
		},
		methods: {
			stringify: function(){
				window.console.log(this.data)
			},
			sendMail: function() {
				document.location.href = "mailto:" + this.data.email + "?body=" + encodeURIComponent(this.message)
				/*document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);*/
			}
		},
		created(){
			this.data = require('@/assets/Content/Kontakt/kontakt.json')
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
