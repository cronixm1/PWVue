<template>
	<div class="d-flex justify-content-center mb-3">
		<div v-for="item in motherboard">
			<b-card>
				<b-img :src="require('../' + item.src)" img-top tag="article" style="max-width: 10rem;" class="mb-2 mx-4"></b-img>
				<h4> {{ item.name}} </h4>
				<hr>
				<b-card-text>
					<p> Socket: {{ item.socket }} </p>
					<hr>
					<p> Memoryslot: {{ item.memoryslot }} </p>
					<hr>
					<p class="price"> {{ item.price }} $</p>
					<hr>
				</b-card-text>
				<b-button variant="dark" @click="modifySetVar(item)" :disabled="(cpuFilter != '' && item.socket != cpuFilter) || (ramFilter != '' && ramFilter != item.memoryslot)">Add</b-button>
			</b-card>
		</div>
	</div>
</template>

<script>
export default {
	name: 'drawMotherboard',
	data() {
		return {
			motherboard: [],
			type: 'Motherboard'
		}
	},
	created() {
		this.$http.get('http://localhost:3000/motherboard').then(function(data) {
			this.motherboard = data.body
		})
	},
	methods: {
		modifySetVar(motherboard) {
			this.$store.commit('setSocket', motherboard.socket)
			this.$store.commit('setMemory', motherboard.memoryslot)
			this.$store.commit('addProduct', { type: this.type, component: { name: motherboard.name, price: motherboard.price } })
		}
	},
	computed: {
		cpuFilter(){
			return this.$store.getters.getSocket
		},
		ramFilter(){
			return this.$store.getters.getMemory
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
