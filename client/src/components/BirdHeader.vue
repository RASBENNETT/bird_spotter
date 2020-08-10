<template>
  <div class="head-container">
    <div class="head-image"></div>

    <div class="title-container">
      <div class="logo">
          <img src= "../../public/logo.png" alt="">
     </div>
      <div  class="title">
        <div>
          BIRD SPOTTER
        </div>  
      </div>
    </div>
  </div>




</template>

<script>
export default {
    name: 'bird-header'

}
</script>

<style>

.head-container{
    height: 100%;
}

.head-image{
  width: 100%;
  height: 80%; 
  position: relative;
  margin-bottom: -5%;
  /* background-color: white; */
  z-index: -3;   
}

.head-image::after {
  content: "";
  height: inherit;
  background-image: url("../../public/title_background.jpg");
  background-size: 100%;
  background-position-y: 19%;
  background-repeat: no-repeat;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}

.title-container{
  display: grid;
  grid-template-columns: 30% 50% 20%;
  width: 100%;
  /* height: 15vh; */
  justify-items: center;
  align-items: center;
  font-size: 3vw;
  /* margin-bottom: 3vh; */
  /* background-color: lightslategray; */
}

.logo, .logo img{
  width: 40%;
  /* height: 80%; */
}


</style>