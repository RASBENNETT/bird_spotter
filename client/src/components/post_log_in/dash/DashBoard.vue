<template>
  <div class="ui-container">
      <h1>DASH</h1>

    <div class="dash-container">

      <div class="dash-sub-container dash-stats">
        <dash-stats></dash-stats>
      </div>

      <div class="dash-sub-container">

      </div>


    </div>
  </div>
</template>

<script>

import DashStats from "./DashStats"

export default {

  components: {
    'dash-stats': DashStats
  }

}
</script>

<style scoped>

.dash-container{
  display: grid;
  grid-template-columns: 60% 40%;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: blue;
}

.dash-sub-container{
  width: 93%;
  height: 90%;
  background-color: chartreuse;
  border-radius: 1vh;
}


</style>