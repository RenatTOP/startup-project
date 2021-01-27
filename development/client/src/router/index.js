import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/routes'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
    
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/auth/login', '/auth/register', '/auth/secure', '/', '/heroes']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
  
    if (authRequired && !loggedIn) {
      next('/auth/login')
    } else {
      next()
    }
  })

export default router
