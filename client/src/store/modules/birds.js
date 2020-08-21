//State Management For Birds
const state = {
    birds: []
};

const getters = {
    allBirds: state => state.birds
};

const actions = {
    setBirds: function ({commit}){
        fetch("http://localhost:3000/birds/")
         .then((res) => res.json()
         .then((res) => commit('setStateBirds', res))
        )
    },
    
};

const mutations = {
    setStateBirds(state, birds) {state.birds = birds}
};


export default {
    state,
    getters,
    actions,
    mutations
}