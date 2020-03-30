<template>
  <div class="mehrvonuns">
    <div class="moreWrapper" v-for="(section, index) in data" :key="'more-' + index">
			<h2>{{ section.heading }}</h2>
			<p>
				{{ section.text }}
			</p>
			<a @click="downloadDocument(section.downloadFile)">{{ section.downloadText }}</a>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'mehr',
		data() {
			return {
				data: [
					{ heading: "Test heading", text: "test Text", downloadText: "Deutsch", downloadFile:"Beitrittsformular deutsch.pdf"}
				]
			}
		},
		methods: {
      downloadDocument: function(name){
        //window.open(require('@/assets/Content/Termine/termine.json'))
				//let document = require('@/assets/Documents/Beitrittsformular deutsch.pdf')
				let string = '@/assets/Documents/' + name
				window.console.log(string === '@/assets/Documents/Beitrittsformular deutsch.pdf')
				import(/* webpackMode: "eager" */ `@/assets/Documents/Beitrittsformular deutsch.pdf`).then( src => {
					window.console.log(src)
				})
				//window.console.log(test)
				//window.open(require('@/assets/Documents/Beitrittsformular deutsch.pdf'))
      }
		}
	}
</script>

<style lang="scss">
  .mehrvonuns{
    min-height: calc(100vh - 174px);
    margin: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
		.mehrvonuns{
			min-height: calc(100vh - 194px);
    }
  }
  @media only screen and (min-width: 992px) {
  }
</style>
