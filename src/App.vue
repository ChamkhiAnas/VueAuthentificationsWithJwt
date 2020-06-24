<template>
  <div id="app">
     <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>


  </div>
</template>

<script>
  import ProductListOne from './components/ProductListOne.vue'
  import ProductListTwo from './components/ProductListTwo.vue'

export default {

    components:{
      'product-list-one':ProductListOne,
      'product-list-two':ProductListTwo

    },


}
</script>

<style lang="scss">
</style>
