<template>
	<div class="datenschutz">
		<div class="datenschutzWrapper">
			<div class="datenschutzSection">
				<h2>Datenschutz</h2>
				<p>
					This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<div class="datenschutzSection">
				<h2>This is a test heading</h2>
				<p>
					This is a test paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.datenschutz{
		min-height: calc(100vh - 174px);
		margin: 0px 30px;
		.datenschutzWrapper{
			padding-top: 30px;
			.datenschutzSection{
				margin-bottom: 40px;
				h2{
					text-decoration: underline;
				}
				p{
					margin: 10px 0px 10px 10px;
				}
			}
			.datenschutzSection:last-child {
				margin-bottom: 0px;
			}
		}
	}
	@media only screen and (min-width: 768px) {
		.datenschutz{
			min-height: calc(100vh - 194px);
			.datenschutzWrapper{
				padding-top: 40px;
				width: 80%;
				margin: 0px 100px 0px auto;
			}
		}
	}
	@media only screen and (min-width: 992px) {
		.datenschutz{
			.datenschutzWrapper{
				width: 50%;
				margin: 0px auto;
			}
		}
	}
</style>
