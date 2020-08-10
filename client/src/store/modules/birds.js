//State Management For Birds
const state = {
    birds: []
};

const getters = {
    allBirds: state => state.birds
};

const actions = {
    getBirds: function ({commit}){
        fetch("http://localhost:3000/birds/")
         .then((res) => res.json()
         .then((res) => commit('setBirds', res))
        )
    },
    
};

const mutations = {
    setBirds(state, birds) {state.birds = birds}
};


export default {
    state,
    getters,
    actions,
    mutations
}