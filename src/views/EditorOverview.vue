<template>
  <div class="root">

  </div>
</template>

<script>
	export default {
		name: 'root',
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
  .root{
    min-height: calc(100vh - 174px);
    margin: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
		.root{
			min-height: calc(100vh - 194px);
    }
  }
  @media only screen and (min-width: 992px) {
  }
</style>
