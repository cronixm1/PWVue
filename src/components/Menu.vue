<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#"><img alt="Vue logo" src="../assets/logo.png"></b-navbar-brand>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <button type="button" class="btn" id="basketButton" data-toggle="modal" data-target="#modalBasket"><img id="basket" src="../assets/basket.png"> </button>

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
  }
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
</style>
