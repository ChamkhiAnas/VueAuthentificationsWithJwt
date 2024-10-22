import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  products:[
      {name:"Banana Skin",price:20},
      {name:"Shiny Star",price:40},
      {name:"Green Shels",price:60},
      {name:"Red Shels",price:80},
    ],
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  getters:{
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    reducePrice:(state,payload)=>{
        state.products.forEach(product=>{
          product.price-=payload
        })
      } ,
      auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
  },
  actions: {
    reducePrice:(context,payload)=>{
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    },
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:8000/api/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
      },
      register({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:8000/api/register', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            console.log("hadhcimadazche",err)
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
        })
      },
      logout({commit}){
        return new Promise((resolve) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  

 
  },
  modules: {
  }
})
