<template>
  <div>
  <div v-for="item in historry">
  <h2> Buyer : <b>{{item[0]}}</b> Tel-number: <b>{{item[1]}}</b> E-mail : <b>{{item[2]}}</b> </h2>
      <!--<h2 v-for="subitem in item[3]">{{subitem.type}} : {{subitem.name}}  {{subitem.quantity}} - {{subitem.price}} </h2> <hr> <hr> -->
  <table class="table table-borderless table-hover" >
    <thead >
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody v-for="subitem in item[3]">
      <tr>
        <th>{{subitem.type}}</th>
        <td>{{subitem.name}}</td>
        <td>{{subitem.quantity}}</td>
        <td>{{subitem.price}}</td>
      </tr>
    </tbody>
  </table>
  
  </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  computed: {
		historry(){
           let historry = []
            historry = JSON.parse(localStorage.getItem('orders'))
            console.log(historry)
            return  historry
		}
	}
}

</script>
<style scoped>

</style>
