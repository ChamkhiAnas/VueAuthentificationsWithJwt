import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../App.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'




Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Register
  // },
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
    path: '/Secure',
    name: 'Secure',
    component: Secure
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
