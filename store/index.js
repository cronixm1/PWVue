import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    setVar:[null, null, null, null, null, null, null],
    socketMth: '',
    memorySlot: '',
    basket: []

  },
 
  /*actions: {
    
  },*/
  mutations: {
    addProduct(state, something){
      let type = something.type;
      let product = something.component;
      if (state.basket.some(el => el.name === product.name)) {
        const key = state.basket.findIndex(el => el.name === product.name);
        state.basket[key].quantity = state.basket[key].quantity + 1;
      } else {
        state.basket.push({ type: type, name: product.name, quantity: 1, price: product.price });
        localStorage.setItem('key',JSON.stringify(state.basket));

      }
    },
    setMemory (state, memorySlot) {
      state.memorySlot = memorySlot
    },
    setSocket (state, socketMth) {
      state.socketMth = socketMth
    },
    setIndex(state, arr){
      state.setVar[arr[0]] = arr[1]
    }
  },
  getters: {
    getMthParams(state){
      return state.mthParams
    },
    getSocket (state) {
      return state.socketMth
    },
    getMemory (state) {
      return state.memorySlot
    },
    getBasket(state){
      return state.basket
    },
    getTotalPrice(state){
      let total = 0
      state.basket.forEach(el => {
        total += el.price * el.quantity
      })
      return total
    }
  }
})

export default store