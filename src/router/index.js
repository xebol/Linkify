import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '../views/Homepage'
import Urls from '../views/Urls'

const routes = [
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/',
    name: 'Urls',
    component: Urls
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router