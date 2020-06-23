<template>
  <div class="hello">

    <product-list-one></product-list-one>
    <product-list-two></product-list-two>


  </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

      products:[
        {name:"Banana Skin",price:20},
        {name:"Shiny Star",price:40},
        {name:"Green Shels",price:60},
        {name:"Red Shels",price:80},



      ]


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
