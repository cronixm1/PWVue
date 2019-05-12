<template>
    <div class="filters">
       <h4> Cpu Socket: <span> {{ socketFromStore }}  </span><button class=" btn-danger" @click="clearSocket">X</button> </h4>
       <h4> Ram Type: <span> {{ getMemory }}  </span><button class=" btn-danger" @click="clearRam">X</button></h4>
        <div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'checkFilter',
  computed: {
    socketFromStore () {
      return this.$store.getters.getSocket
    },
    getMemory(){
      return this.$store.getters.getMemory
    },
  },
  methods: {
    clearSocket(){
      this.$store.commit('setSocket', '')
    },
    clearRam(){
      this.$store.commit('setMemory', '')
    }
  },
}

</script>
<style scoped>
.filters {
    position: fixed;
    z-index: 1;
    margin:40px;
    width: 25%;
    background-color: lightgray;
    text-align: left
}
button{
  float: right
}
</style>