<template>
  <div class="nav-container">
      <button class="nav-button" value="dashboard" @click="handleShow">DASHBOARD</button>
      <button class="nav-button" value="birds" @click="handleShow">MY SIGHTINGS</button>
      <button class="nav-button" value="add" @click="handleShow">ADD</button>
  </div>


</template>

<script>
import { eventBus } from '../../main.js'


export default {
    name: 'navigation-bar',
    
    methods: {
        handleShow(evt) {
            const show = evt.target.value
            eventBus.$emit('select-show', show)
        }
    }

}
</script>

<style scoped>

.nav-container{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

.nav-button{
    width: 33%;
    height: 5vh;
    background-color: #d8f3dc;
    font-size: 2vh;
    border: none;
}

.nav-button:hover{
    background-color: white;
}

</style>