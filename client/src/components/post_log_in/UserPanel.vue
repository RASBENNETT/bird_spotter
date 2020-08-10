<template>
  <div>
      <div class="panel-container">
        {{this.userName}}
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"



export default {

    computed: {
        ...mapGetters(['userName']),
    }


}
</script>

<style scoped>
.panel-container{
    display: flex;
    align-items: center;
    height: 7vh;
    width: 20vw;
    background-color: lightgreen;
    margin-left: 75vw;
    margin-top: -8vh;
    margin-bottom: 2vh;
    font-size: 3vh;
    
}


</style>