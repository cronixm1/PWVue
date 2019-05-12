<template>
	<div  class="d-flex justify-content-center mb-3">
		<div v-for="item in ram">
			<b-card>
				<b-img :src="require('../' + item.src)" img-top tag="article" style="max-width: 10rem;" class="mb-2 mx-4"></b-img>
				<h4> {{ item.name}} </h4> <hr>
				<b-card-text>
					<p> Type: {{ item.memoryslot }} </p> <hr>
					<p> Capacity: {{ item.capacity }} </p> <hr>
					<p> Frequence: {{ item.frequence }} </p> <hr>
					<p class="price"> {{ item.price }} $</p> <hr>
				</b-card-text>
			<b-button variant="dark" @click="modifySetVar(item)" :disabled="ramFilter != '' && ramFilter != item.memoryslot">Add</b-button>
		</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'drawRam',
  data() {
	return {
		ram:[],
		type: 'Ram Memory'

	}
  },
	computed: {
		ramFilter() {
			return this.$store.getters.getMemory
		}
  },
  created(){
	this.$http.get('http://localhost:3000/ram').then(function(data){
	this.ram = data.body
	})
  },
  methods: {
   modifySetVar(ram){
		this.$store.commit('setMemory', ram.memoryslot)
		this.$store.commit('addProduct', {type: this.type, component: {name: ram.name, price: ram.price}} )
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
