<template>
  <div>
        <user-panel></user-panel>
        <navigation-bar></navigation-bar>
        <dash-board v-if="showDashboard" class="ui-container"></dash-board>
        <add-sighting v-if="showAdd" class="ui-container" style="background-color:#d8f3dc;"></add-sighting>
        <birds-data v-if="showBirds" class="ui-container"></birds-data>
  </div>

</template>

<script>
import UserPanel from "./post_log_in/UserPanel"
import NavigationBar from "./post_log_in/NavigationBar"
import DashBoard from "./post_log_in/dash/DashBoard"
import AddSighting from "./post_log_in/add/AddSighting"
import MySightings from "./post_log_in/sightings/MySightings"
import {eventBus} from "../main.js"
import { mapGetters, mapActions } from "vuex"



    

export default {
    name: 'post-login',
    
    data() {
        return {
            showDashboard: true,
            showAdd: false,
            showBirds: false
        }
    },
   
    computed: mapGetters(['userId']),
    
    methods: {
        ...mapActions(['getSightings']),
    },

    mounted() {

        this.getSightings(this.userId)

        eventBus.$on('select-show', (comp) => {
            if (comp === "dashboard") {
                this.showDashboard = true;
                this.showAdd = this.showBirds = false
                }
            if (comp === "add") {
                this.showAdd = true
                this.showDashboard = this.showBirds = false
                }
            if (comp === "birds") {
                this.showBirds = true
                this.showDashboard = this.showAdd = false
                }
        })
    },

    components:{
        'navigation-bar': NavigationBar,
        'dash-board': DashBoard,
        'add-sighting': AddSighting,
        'birds-data': MySightings,
        'user-panel': UserPanel
    }

}
</script>

<style >

.ui-container{
    width: 90vw;
    min-height: 80vh;
    margin: 5vh auto 5vh auto;
    /* background-color: lightgreen; */
    padding: 2vw;
}


</style>