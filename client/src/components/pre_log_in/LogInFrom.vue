<template>
  <div class="h_w form-container">
      <form v-on:submit="handleSubmit" class="h_w animate-expand">
        <div class="login-form" >

            <img class="sparrow-bullet" src="../../../public/sparrow-bullet.png" alt="">

            <div class="login-input">
                <label for="username">Username </label>
                <input type="text" name="username" v-model="username">
            </div>
        
            <div class="login-input">
                <label for="password">Password </label>
                <input type="password" name="password" v-model="password">
            </div>
        
            <div class="login-input">
                <input type="submit" :value="buttonText" class="submit-button">
            </div>

            <img class="sparrow-bullet" src="../../../public/sparrow-bullet.png" alt="">

        </div>
      </form>

    <!-- <h1 v-if="this.error">{{error}}</h1> -->

  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import LogInService from "../../services/LogInService.js"


export default {
    username: 'log-in-form',
    data() {
        return{
            username: null,
            password: null,
            error: null
        }
    },
    props: ['register'],
    methods: {
        handleSubmit(e){
            e.preventDefault()
            if (this.username && this.password)
            {
                const user = {
                    username: this.username,
                    password: this.password
                }
                if (this.register) {
                    LogInService.postRegisterUser(user)
                     .then(res => eventBus.$emit('event-login', res))
                } else {
                    LogInService.postLoginUser(user)
                     .then(res => eventBus.$emit('event-login', res))
                }
                
            } else {
                return this.error = "Login Error"
            }
            this.username = this.password = ""
        }
    },
    computed: {
        buttonText() {
            return this.register ? "Register" : "Login"
        }
    }

}
</script>

<style>

.login-form{
    width: 80%;
    /* height: 100%; */
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-self: center;
    align-items: center;
    margin: auto;
    background-color: #d8f3dc;
    padding: 0 3vh;
    border-radius: 1vh;
}

.login-form input{
    border-radius: 2vh;
    border: none;
    height: 3vh;
}

.submit-button{
    width: 10vw;
    height: 3vh;
}

.login-input{
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.form-container{
    display: flex;
    justify-content: center;
}
.animate-expand{
    animation: 0.5s linear expand;
}

@keyframes expand {
  0%   {width: 50%;}
  100% {width: 100%;}
}

</style>