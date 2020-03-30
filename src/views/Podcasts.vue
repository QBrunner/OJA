<template>
  <div class="podcasts">
    <div class="podcastsContainer row">
      <div class="podcastsOverview col-12 col-lg-6" v-for="(podcast, index) in podcasts" :key="'podcast-' + index"
      @click="$router.push({ name: 'podcastsName', params: { name: podcast.link }}).catch(err => {})">
        <h2>{{ podcast.title }}</h2>
        <p>
          {{ podcast.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'podcasts',
		data() {
			return {
				podcasts: [
        ]
			}
		},
		methods: {
		},
    created(){
			this.podcasts = require('@/assets/Podcasts/podcasts.json')
		}
	}
</script>

<style lang="scss">
  .podcasts{
    min-height: calc(100vh - 174px);
    margin: 0px;
    .podcastsContainer{
      width: 90%;
      margin: auto;
      .podcastsOverview{
        position: relative;
        transition: 0.5s ease;
        padding: 20px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        margin: 20px 0px;
        cursor: pointer;
        h2{
          text-decoration: underline;
        }
      }
      .podcastsOverview:hover{
        scale: 1.02;
      }
    }
  }
  @media only screen and (min-width: 768px) {
		.podcasts{
			min-height: calc(100vh - 194px);
      .podcastsContainer{
        .col-lg-6{
          max-width: calc(50% - 40px);
        }
        .podcastsOverview:nth-child(even){
          margin: 20px 0px 20px 40px;
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .podcasts{
    }
  }
</style>
