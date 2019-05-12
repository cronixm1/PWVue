<template>
	<div  class="d-flex justify-content-center mb-3">
		<div v-for="item in monitor">
			<b-card>
				<b-img :src="require('../' + item.src)" img-top tag="article" style="max-width: 10rem;" class="mb-2 mx-4"></b-img>
				<h4> {{ item.name}} </h4> <hr>
				<b-card-text>
					<p> Inches: {{ item.inches }} </p> <hr>
					<p class="price"> {{ item.price }} $</p> <hr>
				</b-card-text>
			<b-button variant="dark" @click="modifySetVar(item)">Add</b-button>
		</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'drawMonitor',
  data() {
	return {
		monitor:[],
		type: 'Monitor'

	}
  },
  created(){
	this.$http.get('http://localhost:3000/monitor').then(function(data){
	this.monitor = data.body
	})
  },
  methods: {
   modifySetVar(monitor){
		this.$store.commit('addProduct', {type: this.type, component: {name: monitor.name, price: monitor.price}} )
		
		}
	}
  }

</script>
<style scoped>
    .price {
		background: rgba(160, 255, 174, 0.5);
		padding: 13px;
	}
</style>
