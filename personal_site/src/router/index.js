import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const trinitasPages = [
  "combat", 
  "character-creation", 
  "character-creator", 
  "core-rolls", 
  "equipment", 
  "skills", 
  "powers", 
  "backgrounds", 
  "races", 
  "magic", 
  "spells", 
  "admin", 
  "progression",
  "appendices",
  "design-notes"
];
const toTrinitasRoutes = (name) => {
  let parts = name.split("-");
  let componentLink = parts.map(part => part[0].toUpperCase() + part.slice(1)).join("");

  return {
    path: "/Trinitas/" + name,
    name: "trinitas-" + name,
    component: () => import(`../views/trinitas/${componentLink}.vue`)
  };
}

let routes = [
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
    name: 'dnd',
    component: () => import('../views/DndView.vue')
  },
  {
    path: '/trinitas',
    name: 'trinitas',
    component: () => import('../views/Trinitas/Introduction.vue')
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
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin/Admin.vue')
  }
];

routes = [...routes, ...trinitasPages.map(toTrinitasRoutes)];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes,
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  //redirect all non-routes to the 404 page
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }]
})

export default router
