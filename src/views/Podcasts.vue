<template>
  <div class="podcasts">
    <div class="podcastsHeadingContainer">
			<h1 class="podcastsHeading">Podcasts</h1>
		</div>
    <div class="podcastsTextWrapper">
      <div class="podcastsTextContainer">
        <p class="podcastsText" v-for="(text, index) in data.texts" :key="'kontakt-text-' + index">
          {{ text }}
        </p>
      </div>
    </div>
    <div class="podcastsContainer row">
      <div class="col podcastsOverview" v-for="(podcast, index) in data.podcasts" :key="'podcast-' + index"
      @click="$router.push({ name: 'podcastsName', params: { name: podcast.link }}).catch(err => {})">
        <h2>{{ podcast.title }}</h2>
        <p>
          {{ podcast.text }}
        </p>
      </div>
    </div>
    <!--
		<div @click="stringify()">
			stringify
		</div>
		<input type="text" value="" id="stringify">-->
  </div>
</template>

<script>
	export default {
		name: 'podcasts',
		data() {
			return {
        data: {
          texts: [
          ],
          podcasts: [
            {title: '', text: ``, link: ''}
          ]
        }
			}
		},
		methods: {
      stringify: function(){
				let text = JSON.stringify(this.data)
				window.console.log(text)
				let input = document.getElementById('stringify')
				input.value = text
				input.select()
				document.execCommand("copy")
			}
		},
    created(){
			this.data = require('@/assets/Content/Podcasts/podcasts.json')
		}
	}
</script>

<style lang="scss">
  .podcasts{
    min-height: calc(100vh - 174px);
    margin: 0px;
    .podcastsHeadingContainer{
			margin-left: 10px;
			margin-right: 10px;
			.podcastsHeading{
				font-size: 65px;
			}
		}
    .podcastsTextWrapper{
      margin-left: 65px;
			margin-top: 30px;
			margin-right: 15px;
      .podcastsTextContainer{
        margin-bottom: 30px;
        .podcastsText{
          margin-bottom: 20px;
        }
      }
    }
    .podcastsContainer{
      width: 80%;
      margin: auto;
      .podcastsOverview{
        position: relative;
        transition: 0.5s ease;
        padding: 20px 10px;
        border: 2px solid black;
        border-radius: 7px;
        box-shadow: 5px 10px 20px black;
        margin: 5px 0px;
        cursor: pointer;

        min-width: 100%;
        h2{
          text-decoration: underline;
        }
        p{
          margin: 10px 0px 10px 10px;
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
      .podcastsHeadingContainer{
				margin-left: 80px;
				margin-right: 90px;
			}
      .podcastsTextWrapper{
				margin-left: 80px;
				margin-top: 30px;
				margin-right: 90px;
			}
      .podcastsContainer{
        .podcastsOverview{
          min-width: calc(50% - 20px);
          margin: 5px;
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .podcasts{
      .podcastsHeadingContainer{
				.podcastsHeading{
					font-size: 9em;
				}
			}
      .podcastsTextWrapper{
        margin-left: 20%;
				margin-top: 30px;
				margin-right: 20%;
				font-size: 1.5em;
        .podcastsHeadingContainer{
          margin-bottom: 60px;
        }
      }
    }
  }
</style>
