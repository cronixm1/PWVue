<template>
  <div class="container">
    <h3>Please select component</h3>
      <b-form-select v-model="component"> 
        <option  v-for="component in components"> {{ component }} </option>
      </b-form-select>
      <p v-if="component == 'Motherboard'"> <drawMotherboard/> </p>
      <p v-if="component == 'CPU'"> <drawCpu/> </p>
      <p v-if="component == 'ram'"> <drawRam/> </p>
      <p v-if="component == 'rom'"> <drawRom/> </p>
      <p v-if="component == 'gpu'"> <drawGpu/> </p>
      <p v-if="component == 'monitor'"> <drawMonitor/> </p>
      <p v-if="component == 'mouse'"> <drawMouse/> </p>
      <p v-if="component == 'keyboard'"> <drawKeyboard/> </p>
      <br>
  </div>    
</template>



<script>
import drawMotherboard from '@/components/drawMotherboard.vue'
import drawCpu from '@/components/drawCpu.vue'
import drawRam from '@/components/drawRam.vue'
import drawRom from '@/components/drawRom.vue'
import drawGpu from '@/components/drawGpu.vue'
import drawMonitor from '@/components/drawMonitor.vue'
import drawMouse from '@/components/drawMouse.vue'
import drawKeyboard from '@/components/drawKeyboard.vue'

export default {
  name: 'Selects',
  components: {
    drawMotherboard,
    drawCpu,
    drawRam,
    drawRom,
    drawGpu,
    drawMonitor,
    drawMouse,
    drawKeyboard
  },
  data() {
    return {
      selected: null,
      component:'',
      components:[],  
    }
  },
  created(){
    this.$http.get('http://localhost:3000/components').then(function(data){
      this.components = data.body
    })
  }
}

</script>
<style scoped>
select{
    width:30%;
}
</style>
