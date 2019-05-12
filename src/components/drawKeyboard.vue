<template>
	<div  class="d-flex justify-content-center mb-3">
		<div v-for="item in keyboard">
			<b-card>
				<b-img :src="require('../' + item.src)" img-top tag="article" style="max-width: 10rem;" class="mb-2 mx-4"></b-img>
				<h4> {{ item.name}} </h4> <hr>
				<b-card-text>
					<p> Type: {{ item.type }} </p> <hr>
					<p class="price"> {{ item.price }} $</p> <hr>
				</b-card-text>
			<b-button variant="dark" @click="modifySetVar(item)">Add</b-button>
		</b-card>
		</div>
	</div>
</template>

<script>
export default {
  name: 'drawKeyboard',
  data() {
	return {
		keyboard:[],
		type: 'Keyboard'
	}
  },
  created(){
	this.$http.get('http://localhost:3000/keyboard').then(function(data){
	this.keyboard = data.body
	})
  },
  methods: {
		modifySetVar(keyboard){
			this.$store.commit('addProduct', {type: this.type, component: {name: keyboard.name, price: keyboard.price}} )
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
