<template>
  <div>
  
    <bird-header :class="headerClass" ></bird-header>

    <pre-log-in v-if="!loginStatus" :loginData="loginData" :loginStatus="loginStatus" class="h_w"></pre-log-in>
  
    <post-log-in v-if="loginStatus" class="pli-align h_w"></post-log-in>

  </div>
</template>

<script>
import PreLogIn from './components/PreLogIn'
import PostLogIn from './components/PostLogIn'
import BirdHeader from './components/BirdHeader'
import { eventBus } from './main.js'
import { mapGetters, mapActions } from "vuex"



export default {
  name: 'app',
  data() {
    return{
      loginData: null,
      loginStatus: false, // Change Login HERE
      // userId: null,
      publicPath: process.env.BASE_URL

    }
  },

  computed: {
    ...mapGetters(['userName', 'userId']),

    headerClass() {
      return !this.loginStatus ? "large-head" : "small-head";
    }
  },
  methods: mapActions(['getUserName', 'getUserId']),

  components: {
    'pre-log-in': PreLogIn,
    'post-log-in': PostLogIn,
    'bird-header': BirdHeader
  },


  mounted(){

    eventBus.$on('event-login', (res) => {
      this.loginData = res
      if (res.user) {
        this.getUserName(res.user)
        this.getUserId(res.id)
        this.loginStatus = true
      }
    })

  }

}
</script>

<style>

body{
  background-color: #b7e4c7;
  margin-bottom: 15vh;
}

.h_w{
  height: 100%;
  width: 100%;
}

img.sparrow-bullet{
  width: 2vw;
}

input:focus, button:focus{
  outline: 0;
}
*{
  margin: 0%;
  padding: 0%;
  font-family: 'Bellota', cursive;
}

/* .small-head img{
  width: 3vw;
} */

.head-image{
  margin-bottom: -2%;
}

.pli-align{
  position: relative;
  top: 7vh;
}

</style>

<style scoped>


body{
  width: 100vw;
}

.large-head{
  height: 30vh;
}

.small-head{
  animation: shrink 0.5s linear;
  height: 8vh;
}

@keyframes shrink {
  0% {height: 30vh;}
  100% {height: 8vh;}
}







</style>