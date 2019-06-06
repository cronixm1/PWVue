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
            <h4> Total Price: {{totalPrice * promoСod}} $</h4>
          <b-form-input id="input-live" class="mt-2" type="text" v-model="promo" aria-describedby="input-live-help input-live-feedback" placeholder="Input your promocode" trim>
          </b-form-input>
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

  var price = 1 ;
  export default {
  name: 'drawBasket',
   components: {
     logSystem
   },
    data() {
      return {
        promo: ''
         // fields: ['type', 'name', 'quantity' ,'price'],
      }
    },
    computed: {
      basket(){
        return this.$store.getters.getBasket
      },
      promoСod(){
          switch (this.promo) {
              case 'compucter' : 
                price = 0.9
                return price
                break;
              case 'cronixm1' : 
                price = 0.8
                return price
                break;
              case 'peroxiddehidrogen' : 
                price = 0.2
                return price
                break;
              default : price = 1
                return price
          }
      },
      totalPrice(){
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