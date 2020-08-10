<template>
  <div>
    <sighting-cards></sighting-cards>
  </div>
</template>

<script>
import SightingCards from "./SightingCards"

export default {
  name: 'my-sightings',

  components: {
    'sighting-cards': SightingCards
  }


}
</script>

<style scoped>

</style>