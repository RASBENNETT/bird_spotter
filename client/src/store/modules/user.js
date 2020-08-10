
const state = {
    userName: "",
    userId: ""

};

const getters = {
    userName: state => state.userName,
    userId: state => state.userId
};

const actions = {
    getUserName: function ({commit}, userName){
        commit('setUserName', userName)
    },
    getUserId: function ({commit}, id){
        commit('setUserId', id)
    }
};

const mutations = {
    setUserName(state, userName) {state.userName = userName},
    setUserId(state, id) {state.userId = id}
};


export default {
    state,
    getters,
    actions,
    mutations
}