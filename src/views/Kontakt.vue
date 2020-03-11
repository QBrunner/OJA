<template>
	<div class="kontakt">
		<div class="kontaktHeadingContainer">
			<h1 class="kontaktHeading">Kontakt</h1>
			<h2 class="kontaktSlogan">Wir für mehr</h2>
		</div>
		<div class="kontaktFormContainer">
			<p class="kontaktTextContainer">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<div class="row no gutters">
				<div class="col-12 col-md-6">
					<p>*Name</p>
					<input>
				</div>
				<div class="col-12 col-md-6">
					<p>*Email</p>
					<input>
				</div>
			</div>
			<div class="row no gutters">
				<div class="col-12">
					<p>*Nachricht</p>
					<textarea></textarea>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="button">abschicken</div>
		</div>
	</div>
</template>

<style lang="scss">
	.kontakt{
		min-height: calc(100vh - 164px);
		.kontaktHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.kontaktHeading{
				font-size: 65px;
			}
			.kontaktSlogan{
				font-size: 17px;
			}
		}
		.kontaktFormContainer{
			margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
			.kontaktTextContainer{
				margin-bottom: 30px;
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
				.kontaktSlogan{
					font-size: 2.5em;
					display: none;
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
