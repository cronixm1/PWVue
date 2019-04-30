<template>
   <div >
        <!-- <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2 mx-4">
            <h4 v-for="item in motherboard"> {{ item.name}} </h4>
            <b-card-text>
                Aici vor fi parametrii  
            </b-card-text>

            <b-button variant="dark" >Add</b-button>
        </b-card> -->
    </div>
</template>

<script>
export default {
  name: 'drawComponents',
  data() {
    return {
        motherboard:[],

    }
  },
    computed: {
    
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData (){
      //this.$http.get('http://localhost:3000/motherboard').then(data => this.motherboard = data.body)
      
    }
    }
  }

</script>
<style scoped>

</style>
