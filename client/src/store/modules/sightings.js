// State management for sightings form
const state = {
    sightings: [],
};

const getters = {
    allSightings: state => state.sightings
};

const actions = {
    getSightings: function ({commit}, id){
        fetch(`http://localhost:3000/${id}/sightings/`)
        .then((res) => res.json())
        .then((res) => commit('setSightings', res.reverse()))
    },
    postSighting: function ({commit}, payload){
        fetch(`http://localhost:3000/${payload.userId}/sightings/`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then((res) => commit('addSightings', res))
    }
};

const mutations = {
    setSightings(state, sightings) {state.sightings = sightings},
    addSightings(state, sightings) {state.sightings = sightings}
};


export default {
    state,
    getters,
    actions,
    mutations
}