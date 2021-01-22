import axios from 'axios'

const state = {
    dataUser: null
}

const getters = {
    getUsers: (state) => {
        console.log(state.users)
        return state.users
    },
}

const actions = {
    Register(data) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8081/users", data)
            .then((res) => {
                // if(res.data.result[0].msg== "Check Password Anda"){
                //     reject(res.data.result[0].msg)
                // }
                // console.log(res.data);
                resolve(res.data)
                // commit('setToken', res.data.result[0].token)
                console.log(res.data.result)
            })
            .catch(err => {
                reject(new Error(err))
                
            })
        })
    },

}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}