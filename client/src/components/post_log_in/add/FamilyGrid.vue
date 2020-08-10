<template>
      <div :class="gridClass">
        <button type="button" v-if="(!gridStatus && !this.selectedFamily)" @click="gridStatus=true;">Pick a Family</button>
            <div v-if="(!gridStatus && this.selectedFamily)" @click="gridStatus=true;" class="tile-fill">
                <img src="../../../../public/sparrow-bullet.png" alt="img" >
                {{this.selectedFamily}}
            </div>
            <div v-if="gridStatus" class="grid-open">
                <div 
                class="tile" 
                v-for="(family, index) in birdFamilyList" 
                :key="index" 
                :value="family" 
                @click ="handleFamily(family)" >
                    <img src="../../../../public/sparrow-bullet.png" alt="img">
                    {{family}} 
                </div>
            </div>
        </div>
</template>

<script>
import ApiServices from "../../../services/ApiServices.js"
import { eventBus } from "../../../main"
import { mapGetters, mapActions } from "vuex"
import PostLogInVue from '../../PostLogIn.vue'


export default {

    data() {
        return{
            gridStatus: false
        }
    },

    methods: {
        ...mapActions(['getBirds', 'getFamily']),

        handleFamily(family){
            this.getFamily(family);
            this.gridStatus = false;
        }

    },

    computed: {
        ...mapGetters(['allBirds', 'selectedFamily', 'selectedBird']),

        birdFamilyList: function(){
            if (this.allBirds) {
                console.log(this.allBirds);
            const familyArray = this.allBirds.map(bird => bird.family);
            let uniqueFamilyArray = familyArray.filter((family, index, array) => {
                return array.indexOf(family) === index;
            })
            console.log(uniqueFamilyArray);
            return uniqueFamilyArray.sort();
            }
        },
        filteredBirdList: function(){
            if (this.selectedFamily) {
                const filteredList = this.allBirds.filter((bird) => bird.family === this.selectedFamily)
                return filteredList;
            } else {
                return this.allBirds;
            }
        },
        gridClass: function(){
            if (this.gridStatus){
                return "grid-open"
            } else {
                return "grid-closed"
            }
        },
    },
    mounted() {
        this.getBirds()

        eventBus.$on('close-grid', (bird)=>{
            this.gridStatus = false
        })
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

.grid-closed{
    display: flex;
    justify-content: center;
    margin: auto;
    width: 20vw;
    /* height: 100%; */
    overflow-y: hidden;
    /* background-color:  cornflowerblue; */

}

.grid-open{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 28vh;
    overflow-y: scroll;
    padding-top: 1vh;

    /* background-color:  cornflowerblue; */
}

.tile, .tile-fill{
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    align-items: center;
    min-width: 7vw;
    padding: 1vh;
    height: 8vh;
    margin: 0.5vh;
    text-align: center;
    font-size: 2vh;
    /* background-color:  greenyellow; */
}

.tile{
    margin-bottom: 1vh;
}

.tile-fill{
    height: 100%;
}

.tile:hover, .tile-fill:hover{
    background-color:  white;
}

button{
    width: 10vw;
}

img{
    width: 1.5vw;
}

</style>