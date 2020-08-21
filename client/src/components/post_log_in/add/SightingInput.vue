<template>
    <div >
        <form @submit.prevent="handleSubmit" class="sighting-input h_w">
            <div class="first-row">
                <div class="first-row-comps">
                    <div class="bird-select">
                        <label for="family">Family</label>
                        <family-grid></family-grid>
                        <label for="bird">Bird</label>
                        <bird-dropdown class="h_w"></bird-dropdown>
                    </div>

                    <div class="map-container">
                        <label for="map">Location</label>
                        <form-map class="form-map"></form-map>
                    </div>
                </div>
            </div>

            <div class="second-row">
                <label for="date">Date</label>
                <input type="date" name="date" class="dt-input" v-model="date">
                <label for="time">Time</label>
                <input type="time" name="time" class="dt-input" v-model="time">
            </div>
                
            <input type="submit" name="" id="">

        </form>

    </div>
</template>

<script>
import ApiServices from "../../../services/ApiServices.js"
import FormMap from "./FormMap"
import FamilyGrid from "./FamilyGrid"
import BirdDropdown from "./BirdDropdown"
import { eventBus } from '../../../main'
import { mapGetters, mapActions } from "vuex"

export default {
    name: 'sighting-input',
    data() {
        return{
            date: "",
            time: "",
            notes: "",
        }
    },

    computed: mapGetters(['selectedFamily', 'selectedBird', 'selectedLat', 'selectedLng', 'userId']),

    methods: {
        ...mapActions(['setFamily', 'setBird', 'setLat', 'setLng', 'postSighting']),

        handleSubmit() {
            const payload = {
                userId: this.userId,
                bird: this.selectedBird,
                family: this.selectedFamily,
                lat: this.seletedLat,
                lng: this.selectedLng,
                date: this.date,
                time: this.time,
                notes: this.notes
            };

            this.postSighting(payload)

            this.setBird(null);
            this.setFamily(null);
            this.time = "";
            this.date = "";
            this.notes = "";
        }

    },
    
    mounted() {
      
    },

    created(){
        this.setFamily();
    },

    components: {
        'form-map': FormMap,
        'family-grid': FamilyGrid,
        'bird-dropdown': BirdDropdown
    }


}
</script>

<style scoped>



.sighting-input{
    display: grid;
    grid-template-columns: auto;
    row-gap: 2vh;
}


.bird-select{
    display: grid;
    grid-template-rows: 10% auto 10% auto;
    justify-items: center;
    /* align-items: start; */
    /* row-gap: 1vh; */
    width: 95%;
    min-height: 40vh;
    /* margin: auto; */
}

.first-row{
    height: auto;
}

.first-row-comps{
    display: grid;
    grid-template-columns: 55% 45%;
    justify-items: center;
    /* align-items: center; */
    width: 100%;
    margin: auto;
}

.map-container{
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
}

.second-row{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
}

.dt-input{
    height: 5vh;
}

label{
    font-size: 2.7vh;
    height: 3vh;
}

</style>