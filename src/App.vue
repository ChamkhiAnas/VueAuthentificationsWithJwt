<template>
  <div id="app">
     <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> -->
    <!-- <product-list-one></product-list-one>
    <product-list-two></product-list-two> -->

  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <router-view/>
  </div>

  </div>
</template>

<script>
  // import ProductListOne from './components/ProductListOne.vue'
  // import ProductListTwo from './components/ProductListTwo.vue'

export default {

    // components:{
    //   'product-list-one':ProductListOne,
    //   'product-list-two':ProductListTwo

    // },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },


}
</script>

<style lang="scss">
</style>
