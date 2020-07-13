import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/crm/Home.vue'
import Login from '../views/Login.vue'
import PageNotFound from '../views/404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound,

},
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
