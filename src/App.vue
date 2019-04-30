<template>
  <div id="app">
    <Menu/>
    <Selects/>
    <div id="draw" class="container row m-auto mt-4">
      <drawComponents ></drawComponents>    
    </div>
    <div  class="val"></div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Selects from './components/Selects.vue'
import drawComponents from './components/drawComponents.vue'

export default {
  name: 'app',
  components: {
   Menu,
   Selects,
  drawComponents
  }
}
</script>

<style>
html{
    background: gray;
}
#draw{
    margin-top: 100px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-style: bold;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: gray;

}

</style>
/*v-for="drawCard in drawComp" :draw="drawCard"*/