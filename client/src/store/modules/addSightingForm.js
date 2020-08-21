
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
    setFamily: function({commit}, family){
        commit('setStateFamily', family)
    },
    setBird: function({commit}, bird){
        commit('setStateBird', bird)
        commit('setStateFamily', bird.family)
    },
    setLatLng: function({commit}, orr){
        commit('setStateLat', orr.lat)
        commit('setStateLng', orr.lng)
    },
};

const mutations = {
    setStateFamily(state, family) {state.selectedFamily = family},
    setStateBird(state, bird) {state.selectedBird = bird},
    setStateLat(state, lat) {state.selectedLat = lat},
    setStateLng(state, lng) {state.selectedLng = lng},
};


export default {
    state,
    getters,
    actions,
    mutations
}