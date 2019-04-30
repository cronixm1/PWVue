<template>
  <div class="container">
    <h3>Please select component</h3>
      <b-form-select > 
        <option  v-for="component in components"> {{ component }} </option>
      </b-form-select>
     <!-- <h3>Procesor</h3>
      <b-form-select> 
        <option v-for="item in cpu"> {{ item.name }} </option>
      </b-form-select>      
      <h3>RAM Memory</h3>
      <b-form-select> 
        <option v-for="item in ram"> {{ item.name }} </option>
      </b-form-select>    
      <h3>ROM Memory</h3>
      <b-form-select> 
        <option v-for="item in rom"> {{ item.name }} </option>
      </b-form-select>      
      <h3>GPU</h3>
      <b-form-select> 
        <option v-for="item in gpu"> {{ item.name }} </option>
      </b-form-select>      
      <h3>Monitor</h3>
      <b-form-select> 
        <option v-for="item in monitor"> {{ item.name }} </option>
      </b-form-select>      
      <h3>Mouse</h3>
      <b-form-select> 
        <option v-for="item in mouse"> {{ item.name }} </option>
      </b-form-select>      
      <h3>Keyboard</h3>
      <b-form-select> 
        <option v-for="item in keyboard"> {{ item.name }} </option>
      </b-form-select>-->
      <br>
  </div>
</template>

<script>
export default {
  name: 'Selects',
  data() {
    return {
      selected: null,
      components:[],
      motherboard:[],
      cpu:[],
      ram: [],
      rom: [],
      gpu: [],
      monitor: [],
      mouse: [],
      keyboard: []
    }
  },
    computed: {
    
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (){
      this.$http.get('http://localhost:3000/components').then(data =>this.components = data.body)
      this.$http.get('http://localhost:3000/motherboard').then(data => this.motherboard = data.body)
      this.$http.get('http://localhost:3000/cpu').then(data => this.cpu = data.body)
      this.$http.get('http://localhost:3000/ram').then(data => this.ram = data.body)
      this.$http.get('http://localhost:3000/rom').then(data => this.rom = data.body)
      this.$http.get('http://localhost:3000/gpu').then(data => this.gpu = data.body)
      this.$http.get('http://localhost:3000/monitor').then(data => this.monitor = data.body)
      this.$http.get('http://localhost:3000/mouse').then(data => this.mouse = data.body)
      this.$http.get('http://localhost:3000/keyboard').then(data => this.keyboard = data.body)
    },
    // choise: function (event) {
    //     alert('Hello !')
    //   }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
    width:30%;
}
</style>
