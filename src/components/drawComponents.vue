<template>
  <div>
    <!-- <input type="text" v-model="message">
      <h1>Apare -- {{messageFromStore}}</h1> -->

  </div>  
</template>

<script>
export default {
  name: 'drawComponents',
  data () {
    return {
      //message: ''
    }
  },
 /* watch: {
    message: function (val) {
      this.message = val
      this.$store.commit('setMessage', val)
    }
  },*/
  computed: {
     /* messageFromStore () {
      return this.$store.getters.getMessage
    },*/
    /*indexFromStore() {
      return this.$store.getters.getIndex
    }*/
  }
}

</script>
<style scoped>

</style>
