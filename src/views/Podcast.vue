<template>
  <div class="podcast">
    <iframe src="https://open.spotify.com/embed/album/5hryhrT7wEdLnZCbJX9F6L" width="100%" height="800px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
</template>

<style lang="scss">
  .podcast{
    min-height: calc(100vh - 174px);
    margin: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
		.podcast{
			min-height: calc(100vh - 194px);
    }
  }
  @media only screen and (min-width: 992px) {
  }
</style>
