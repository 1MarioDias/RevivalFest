import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lineup',
      name: 'lineup',
      component: () => import('../views/LineupView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: () => import('../views/TicketsView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    //{
    //  path: '*',
    //  component: PageNotFound,
    //},
    ],
})
// router.beforeEach((to, from, next) => { 
//   if (to.meta.requiresAuth && !userAuthenticated()) {
//     next('/login');
//   } 
//   else { 
//     next() ;
//   } 
// })

// router.beforeRouterLeave((to, from, next) => {
//   const answer = window.confirm('Are you sure you want to leave?')
//   if (answer) {
//     next()
//   } 
//   else {
//     next(false)
//   }
// })
export default router
