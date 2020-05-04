import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'dashboard',
        component: () => import('@app/pages/DashboardPage.vue')
    },
    {
        path     : '/dashboard',
        name     : 'dashboard',
        component: () => import('@app/pages/DashboardPage.vue')
    },
    {
        path     : '/profile',
        name     : 'profile',
        component: () => import('@app/pages/ProfilePage.vue')
    },
    {
        path     : '/graphs',
        name     : 'graphs',
        component: () => import('@app/pages/GraphPage.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;