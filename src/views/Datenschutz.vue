<template>
	<div class="datenschutz">
		<div class="datenschutzWrapper">
			<div class="datenschutzSection" v-for="(section, index) in sections" :key="'datenschutz' + index">
				<h2>{{section.heading}}</h2>
				<p>
					{{section.text}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'datenschutz',
		data() {
			return {
				sections: [
				]
			}
		},
		methods: {
		},
		created(){
			let data = JSON.parse(require('@/assets/Content/Datenschutz/datenschutz.json'))
			this.sections = data
		}
	}
</script>

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
