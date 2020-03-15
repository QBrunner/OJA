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
		path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/Kontakt.vue')
	},
  {
    path: '/kalender',
    name: 'kalender',
    component: () => import('../views/Kalender.vue')
  },
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () => import('../views/Podcasts.vue')
  },
  {
		path: '/aktionen',
		name: 'aktionen',
		component: () => import('../views/Aktionen.vue')
	},
	{
		path: '/aktionen/:name',
    name: 'aktionenName',
    component: () => import('../views/Gallery.vue')
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
