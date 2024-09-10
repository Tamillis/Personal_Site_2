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
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue')
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
      component: () => import('../views/PEDD/PEDD.vue')
    },
    {
      path: '/pedd/combat',
      name:'pedd-combat',
      component: () => import('../views/PEDD/PEDDCombat.vue')
    },
    {
      path: '/pedd/character-creation',
      name:'pedd-character-creation',
      component: () => import('../views/PEDD/PEDDCharacterCreation.vue')
    },
    {
      path: '/pedd/character-creator',
      name:'pedd-character-creator',
      component: () => import('../views/PEDD/PEDDCharacterCreator.vue')
    },
    {
      path: '/pedd/skills',
      name:'pedd-skills',
      component: () => import('../views/PEDD/PEDDSkills.vue')
    },
    {
      path: '/pedd/powers',
      name:'pedd-powers',
      component: () => import('../views/PEDD/PEDDPowers.vue')
    },
    {
      path: '/pedd/magic',
      name:'pedd-magic',
      component: () => import('../views/PEDD/PEDDMagic.vue')
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
    {
      path: '/transissional',
      name: 'transissional',
      component: () => import('../views/TransissionalView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    //redirect all non-routes to the 404 page
    { path: '/:pathMatch(.*)*', 
      redirect: '/404' }
  ]
})

export default router
