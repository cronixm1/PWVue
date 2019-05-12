<template>
	<div id="app">
		<Menu/>
		<checkFilter/>
		<Selects/>
		<div id="draw" class="container row m-auto mt-4">
		</div>
		<div  class="val"></div>
		<drawBasket/>
		<router-view></router-view>
	</div>
</template>

<script>
import Menu from './components/Menu.vue'
import Selects from './components/Selects.vue'
import drawBasket from '@/components/drawBasket.vue'
import checkFilter from '@/components/checkFilter.vue'


export default {
	name: 'app',
	components: {
	Menu,
	Selects,
	drawBasket,
	checkFilter
	}
}
</script>

<style>
.custom-select{
	margin: 20px
}
.card{
	margin: 20px
}
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