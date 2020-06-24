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
  saleProducts:state=>{
    var saleProducts=state.products.map(product => {
        return {
          name:"**"+product.name+"**",
          price:product.price/2
        }
      });
      return saleProducts;
    }
   
  },
  mutations: {
    reducePrice:(state,payload)=>{
        state.products.forEach(product=>{
          product.price-=payload
        })
      } 
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
  

 
  },
  modules: {
  }
})
