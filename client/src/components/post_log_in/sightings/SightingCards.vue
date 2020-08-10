<template>
  <div>
       <div class="sightings-container">
           <div class="sightings-title" @click="showSightings=!showSightings;">
               <h1 v-if="!showSightings">My Sightings &#8744; </h1>
               <h1 v-if="showSightings">My Sightings &#8743;</h1>
           </div>
    
           <div class="card-container" v-if="showSightings">
             <div v-for="(sighting, index) in this.allSightings" :key="index" class="sighting-card">
                <div>
                  {{sighting.bird.name}}
                </div>
                <div>
                  Date: {{sighting.date}}
                </div>
                <div>
                  Time: {{sighting.time}}
                </div>
             </div>
           </div>
       </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    data() {
        return{
            showSightings: true
        }
    },

  methods: {
    ...mapActions(['getSightings'])
  },
  computed: {
    ...mapGetters(['allSightings', 'userId']),
  },
  mounted() {
    this.getSightings(this.userId)
  },
}
</script>

<style scoped>
.sightings-container{
    display: flex;
    flex-direction: column;
    /* justify-items: center;
    align-items: center; */
}

.sightings-title{
    width: 20%;
    text-align: center;
    padding: 1vh;
    background-color: #d8f3dc;
    font-size: 1.3vh;
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
}

.sighting-card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  width: 13vw;
  margin: 2vh;
  background-color: #d8f3dc;
  text-align: center;
}
</style>