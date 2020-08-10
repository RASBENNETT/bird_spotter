import Vue from 'vue'
import Vuex from 'vuex'
import birds from './modules/birds'
import addSightingForm from './modules/addSightingForm'
import user from './modules/user'
import sightings from './modules/sightings'

//Tell Vue to use Vuex
Vue.use(Vuex)

//Tell vuex what state modules to use
export default new Vuex.Store({
    modules: {
        birds,
        addSightingForm,
        user,
        sightings
    }
})