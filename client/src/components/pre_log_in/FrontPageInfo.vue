<template>
  <div>
      <div class="info-container">

      <div class="front-page-info">
        <p><b>Welcome To Bird Spotter.</b></p>
        <br>
        <p>If you are a twitcher with eyes always to the skies.  </p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'front-page-info'
}
</script>

<style>
.info-container{
  display: grid;
  grid-template-columns: 20% 80%;
  column-gap: 2vw;
  width: 90%;
  height: 20vh;
  margin: auto;
  border-radius: 1vh;
  /* background-color: lightslategray; */

  /* margin: auto; */
}

.front-page-info{
  width: 80%;
  /* text-align: center; */
  font-size: 1.5vw;
  padding: 2vh;
  /* display: flex; 
  justify-content: center;
  align-items: center; */
  background-color: #d8f3dc;
}

</style>