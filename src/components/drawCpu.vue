<template>
	<div  class="d-flex justify-content-center mb-3">
		<div v-for="item in cpu">
		<b-card>
			<b-img :src="require('../' + item.src)" img-top tag="article" style="max-width: 10rem;" class="mb-2 mx-4"></b-img>
				<h4> {{ item.name}} </h4> <hr>
				<b-card-text>
					<p> Socket: {{ item.socket }} </p> <hr>
					<p> Frequence: {{ item.frequence }} </p> <hr>
					<p class="price"> {{ item.price }} $</p> <hr>
				</b-card-text>
			<b-button variant="dark" @click="modifySetVar(item)" :disabled="cpuFilter != '' && item.socket != cpuFilter " >Add</b-button> 
		</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'drawCpu',
  data() {
	return {
		cpu:[],
		type: 'Procesor'

	}
  },
  created(){
	this.$http.get('http://localhost:3000/cpu').then(function(data){
	this.cpu = data.body
	})
  },
  methods: {
   modifySetVar(cpu){
		this.$store.commit('setSocket', cpu.socket)
		this.$store.commit('addProduct', {type: this.type, component: {name: cpu.name, price: cpu.price}} )
		
		}
	},
	computed: {
		cpuFilter(){
			return this.$store.getters.getSocket
		}
		/*access(item){
			if(this.cpuFilter != '' ) {
				if(this.cpuFilter != item){
					return true
				}
			}
		}*/
	}
  }

</script>
<style scoped>
    .price {
		background: rgba(160, 255, 174, 0.5);
		padding: 13px;
	}
</style>
