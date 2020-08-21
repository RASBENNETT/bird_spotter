<template>
  <div>
      <div v-for="(sighting, index) in allSightings" :key="index">
          <p >
              {{sighting.bird.name}}
          </p>
      </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "dash-stats",

    computed: mapGetters(['allSightings']),

    methods: {
        // familyCount = (allSightings) => {
        //     allSightings.map((sighting) => {

        //     })
        }
}

</script>

<style>

</style>