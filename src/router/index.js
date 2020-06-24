import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../App.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'
import store from '../store'





Vue.use(VueRouter)

  const routes = [

  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: { 
      requiresAuth: true
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
