<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><img alt="Vue logo" src="../assets/logo.png"></b-navbar-brand>
      <b-nav-item href="/#/history">History</b-nav-item>
      <b-nav-item href="/#/">X</b-nav-item>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button v-b-modal.modal-1 class="basketBtn"><img id="basket" src="../assets/basket.png"></b-button>
  		      <!-- <b-button v-b-modal.modal-2>Launch demo modal</b-button>-->

          </b-nav-form>

        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 300px;
}
button img{
  width: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-secondary {
    background-color: rgba(0,0,0,0.0);
    border-color: rgba(0,0,0,0.1);
}
</style>
