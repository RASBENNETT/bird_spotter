<template>
  <div class="ui-container">
      <sighting-input></sighting-input>
  </div>
</template>

<script>
import SightingInput from "./SightingInput"

export default {
  name: 'add-sighting',
  components:{
    'sighting-input': SightingInput
  }

}
</script>

<style>

</style>