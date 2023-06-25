import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage';
import About from '../views/About';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;