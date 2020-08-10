export default{

    getBirds(){
        return fetch("http://localhost:3000/birds/")
        .then(res => res.json());
    },

    getTreasures(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postSighting(payload){
        return fetch("http://localhost:3000/:id/sighting", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },


}