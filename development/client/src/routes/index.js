import Home from '@/views/pages/HomePage'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Activate from '@/views/auth/Activate'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/auth/email-activate/',
        name: 'Activate',
        component: Activate,
    },
    {
        path: '/secure',
        name: 'Secure',
        component: () => import('@/views/auth/Secure'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/Profile'),
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/pages/BoardUser'),
    },
    {
        path: '/mod',
        name: 'Moderator',
        component: () => import('@/views/pages/BoardModerator'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/pages/BoardAdmin'),
    },
    {
        path: '/heroes',
        name: 'heroes',
        component: () => import('@/views/pages/heroes/HeroesPage'),
    }
]

export default routes
