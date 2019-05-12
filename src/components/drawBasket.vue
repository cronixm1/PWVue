<template>
    <div>
        <b-modal ref="modal" id="modal-1" title="Basket" ok-title='Buy' ok-variant='danger'  @ok="handleOk">
        <table class="table table-hover" >
          <thead >
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in basket">
            <tr>
              <th> {{item.type}}</th>
              <td>{{item.name}}</td>
              <td>{{item.quantity}}</td>
              <td>{{item.price}}</td>
              <b-button size="sm" class="btn btn-danger mt-2" @click="delet(index)">X</b-button>
            </tr>
          </tbody>
        </table>
            <!--  <div>
                <b-table striped hover :items="basket" :fields="fields" > </b-table>
            </div> -->
            <h4> Total Price: {{TotalPrice}}</h4>
        </b-modal>
        <b-modal ref="orderModal" id="modal-2" hide-footer title="Order Confirmation">
            <div>
            	<logSystem/>
            </div>
        </b-modal>
        <div>
      </div>
    </div>
</template>
<script>

import logSystem from '@/components/logSystem.vue'

export default {
  name: 'drawBasket',
   components: {
     logSystem
   },
    data() {
      return {
         // fields: ['type', 'name', 'quantity' ,'price'],
      }
    },
    computed: {
    basket(){
      return this.$store.getters.getBasket
    },
    TotalPrice(){
      return this.$store.getters.getTotalPrice
    }
  },
  methods:{
    delet(i){
        let basket = this.basket
        basket.splice(i, 1);
        this.$store.commit('addProduct', basket)
    },
    handleOk() {     
      this.$refs.modal.hide()
      this.$refs.orderModal.show()
      }
  }
}


</script>
<style scoped>
.btn-primary{
  background-color: black
}
</style>