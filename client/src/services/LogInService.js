// const baseURL = "http://localhost:3000/login_register"

export default{

    postLoginUser(payload){
        
        return fetch("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    postRegisterUser(payload){
        
        return fetch("http://localhost:3000/register", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }

}