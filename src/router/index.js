import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
		path: '/news',
		name: 'news',
		component: () => import('../views/News.vue')
	},
  {
		path: '/news/:name',
    name: 'newsName',
    component: () => import('../views/Gallery.vue')
	},
  {
    path: '/termine',
    name: 'termine',
    component: () => import('../views/Termine.vue')
  },
  {
    path: '/termine/:name',
    name: 'termineName',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () => import('../views/Podcasts.vue')
  },
  {
    path: '/podcasts/:name',
    name: 'podcastsName',
    component: () => import('../views/Podcast.vue')
  },
  {
    path: '/mehrvonuns',
    name: 'mehrvonuns',
    component: () => import('../views/Mehr von uns.vue')
  },
  {
		path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/Kontakt.vue')
	},
  {
		path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('../views/Datenschutz.vue')
	},
  {
		path: '/impressum',
    name: 'impressum',
    component: () => import('../views/Impressum.vue')
	},
  {
    path: '/editor-overview',
    name: 'editor-overview',
    component: () => import('../views/EditorOverview.vue')
  },
  {
    path: '/editor-rechtliches/:name',
    name: 'editor-rechtliches',
    component: () => import('../views/Rechtliches.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
	scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
