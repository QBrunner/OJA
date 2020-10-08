<template>
  <div class="editorOverview">
    <div class="editorWrapper">
      <h2>Navigation:</h2>
      <a class="editorLink" @click="$router.push({ name: 'editor-podcasts' }).catch(err => {})">Podcasts</a>
      <a class="editorLink" @click="$router.push({ name: 'editor-kontakt' }).catch(err => {})">Kontakt</a>
    </div>
    <div class="editorWrapper">
      <h2>Footer:</h2>
      <a class="editorLink" @click="$router.push({ name: 'editor-rechtliches', params: { name: 'impressum' }}).catch(err => {})">Impressum</a>
      <a class="editorLink" @click="$router.push({ name: 'editor-rechtliches', params: { name: 'datenschutz' }}).catch(err => {})">Datenschutz</a>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'editorOverview',
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
  .editorOverview{
    min-height: calc(100vh - 174px);
    margin: 0px 30px;
    .editorWrapper{
      width: 70%;
      margin: auto;
      padding: 20px;
      .editorLink{
        position: relative;
        transition: 0.5s ease;
        padding: 20px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        margin: 5px 0px;
        cursor: pointer;
        text-align: center;
        width: 100%;
        display: block;
      }
      .editorLink:hover{
        scale: 1.02;
      }
    }
  }
  @media only screen and (min-width: 768px) {
		.editorOverview{
			min-height: calc(100vh - 194px);
    }
  }
  @media only screen and (min-width: 992px) {
  }
</style>
