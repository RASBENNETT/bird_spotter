<template>
  
  <div>

    <div class="login-container">
        <div class="login-title" v-if="!showLogin">
              <!-- <img class="sparrow-bullet" src="../../public/sparrow-bullet.png" alt=""> -->
              <div v-if="!showLogin"> <button class="login-button" @click="register=false; showLogin=true;">Login</button> </div>
              <img class="feather" src="../../public/feather-separator.png" alt="">
              <div v-if="!showLogin"> <button class="login-button" @click="register=true; showLogin=true;">Register</button> </div>
              <!-- <img class="sparrow-bullet" src="../../public/sparrow-bullet.png" alt=""> -->
        </div>
    
    
        <log-in-form v-if="showLogin && !loginStatus" :register="register"></log-in-form>
        <div v-if="loginData" class="login-message">{{loginData.errors}}</div>
        <div v-if="loginStatus" class="login-message" style="height:5vh;font-size: 3vh;">{{loginData.success}}</div>
    </div>

    <front-page-info></front-page-info>

  </div>

</template>

<script>
import LogInFrom from './pre_log_in/LogInFrom'
import FrontPageInfo from './pre_log_in/FrontPageInfo'
import { eventBus } from '../main'

export default {
    name: 'pre-log-in',
    data() {
    return{
        showLogin: false,
        register: false
        }
    },
    props: ['loginData', 'loginStatus'],
    components: {
        'log-in-form': LogInFrom,
        'front-page-info': FrontPageInfo
    },
  
}
</script>

<style scoped>

.login-title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 8vh;
  margin: auto;
  padding: 0 3vh;
  border-radius: 1vh;
  background-color: #d8f3dc;
  font-size: 3vh;
}

.feather{
    width: 1vw;
}

.login-message{
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
    background-color: #edf2f4;
    padding: 0 3vh;
    border-radius: 1vh;
}

.login-button{
    width: 7vw;
    height: 5vh;
    background: none;
    border: none;
    font-size: 2.5vh;
}


</style>