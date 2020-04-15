<template>
	<div class="impressum">
		<div class="impressumWrapper">
			<div class="impressumSection" v-for="(section, index) in sections" :key="'impressum' + index">
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
		name: 'impressum',
		data() {
			return {
				sections: [
					''
				]
			}
		},
		methods: {
		},
		created(){
			let data = JSON.parse(require('@/assets/Content/Impressum/impressum.json'))
			this.sections = data
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
				h2{
					text-decoration: underline;
				}
				p{
					margin: 10px 0px 10px 10px;
				}
			}
			.impressumSection:last-child {
				margin-bottom: 0px;
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
	@media only screen and (min-width: 992px) {
		.impressum{
			.impressumWrapper{
				width: 50%;
				margin: 0px auto;
			}
		}
	}
</style>
