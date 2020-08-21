<template>
      <div :class="dropdownClass">
        <button type="button" v-if="(!dropdownStatus && !this.selectedBird)" @click="dropdownStatus=true;">Pick a Bird</button>
            <div v-if="(!dropdownStatus && this.selectedBird)" @click="dropdownStatus=true;" class="option-fill">
                <!-- <img src="../../../../public/sparrow-bullet.png" alt="img" > -->
                {{this.selectedBird.name}}
            </div>
            <div v-if="dropdownStatus" class="dropdown-open">
                <div 
                class="option" 
                v-for="(bird, index) in filteredBirdList" 
                :key="index" 
                :value="bird" 
                @click ="handleBird(bird)" >
                    <!-- <img src="../../../../public/sparrow-bullet.png" alt="img"> -->
                    {{bird.name}} 
                </div>
            </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"  // Import Mapping from Vuex
import { eventBus } from "../../../main"

export default {

    data() {
        return{
            dropdownStatus: false
        }
    },
    computed: {

        // Tell Vuex what properties to map to Bird Dropdown Component
        ...mapGetters(['allBirds', 'selectedFamily', 'selectedBird']), 
        
        filteredBirdList: function(){
            if (this.selectedFamily) {
                const filteredList = this.allBirds.filter((bird) => bird.family === this.selectedFamily) // use allBirds from vuex repo to filter family list
                return filteredList;
            } else {
                return this.allBirds;
            }
        },
        dropdownClass: function(){
            if (this.dropdownStatus){
                return "dropdown-open"
            } else {
                return "dropdown-closed"
            }
        },
    },
    methods: {
        // Tell Vuex what state actions to map to Bird Dropdown Component
        ...mapActions(['setBirds', 'setBird', 'setFamily']),

        handleBird(bird){
            this.dropdownStatus = false;
            eventBus.$emit('close-grid', bird)
            this.setFamily(bird.family)
            this.setBird(bird);
        }

    },
     mounted() {
         // Get all birds from Vuex
        this.setBirds()
    },
}
</script>

<style scoped>

button{
    width: 50%;
    height: 7vh;
    background-color: lawngreen ;
    font-size: 1.2vw;
    border: none;
    border-radius: 1vh 1vh 0 1vh;
}

button:hover{
    background-color: greenyellow;
}

.dropdown-closed{
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 7vh;
    /* margin: auto; */
    overflow-y: hidden;
    margin-bottom: 5vh;
    /* background-color:  cornflowerblue; */
}

.dropdown-open{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 80%;
    max-height: 20vh;
    overflow-y: scroll;
    /* margin-bottom: 5vh; */
    align-self: center;
    /* background-color:  cornflowerblue; */
}

.option, .option-fill{
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 3vh;
    margin: auto;
    /* background-color:  greenyellow; */
    text-align: center;
    font-size: 2vh;
}

.option{
    margin-bottom: 1vh;
}

.option-fill{
    height: 100%;
}

.option:hover, .option-fill:hover{
    background-color:  white;
}

button{
    width: 10vw;
}

img{
    width: 1.5vw;
}

</style>