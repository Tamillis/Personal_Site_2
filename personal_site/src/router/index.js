import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/programming',
      name: 'programming',
      component: () => import('../views/ProgrammingView.vue')
    },
    {
      path: '/dnd',
      name:'dnd',
      component: () => import('../views/DndView.vue')
    },
    {
      path: '/pedd',
      name:'pedd',
      component: () => import('../views/PEDDView.vue')
    },
    {
      path: '/mewiki',
      name: 'mewiki',
      component: () => import('../views/WikiView.vue')
    },
    {
      path: '/mewiki/:file+',
      name: 'mewiki-page',
      component: () => import('../views/WikiPageView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/Statistics.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import('../views/Survey.vue')
    },
    //redirect all non-routes to the index
    { path: '/:pathMatch(.*)*', 
      redirect: '/' }
  ]
})

export default router
