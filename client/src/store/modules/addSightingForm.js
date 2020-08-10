
const state = {
    selectedFamily: "",
    selectedBird: "",
    selectedLat: "",
    selectedLng: "",
};

const getters = {
    selectedFamily: state => state.selectedFamily,
    selectedBird: state => state.selectedBird,
    selectedLat: state => state.selectedLat,
    selectedLng: state => state.selectedLng,
};

const actions = {
    getFamily: function({commit}, family){
        commit('setFamily', family)
    },
    getBird: function({commit}, bird){
        commit('setBird', bird)
        commit('setFamily', bird.family)
    },
    getLatLng: function({commit}, orr){
        commit('setLat', orr.lat)
        commit('setLng', orr.lng)
    },
};

const mutations = {
    setFamily(state, family) {state.selectedFamily = family},
    setBird(state, bird) {state.selectedBird = bird},
    setLat(state, lat) {state.selectedLat = lat},
    setLng(state, lng) {state.selectedLng = lng},
};


export default {
    state,
    getters,
    actions,
    mutations
}