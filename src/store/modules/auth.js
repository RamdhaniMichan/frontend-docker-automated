import axios from "axios";

const state = {
  user: null,
  isLoggedIn: false,
  authtoken: null,
};

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  user(state) {
    return state.user;
  },
  getIsAuth(state) {
    if (state.authtoken != null) {
      return true;
    } else {
      return false;
    }
  },
  getOut() {
    if (state.authtoken == null) {
      return true;
    } else {
      return false;
    }
  },
  getToken(state) {
    return state.authtoken;
  },
};

const actions = {
  Login({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_URL + "auth", data)
        .then((res) => {
          if (res.data.result[0].msg == "Check Password") {
            alert("Check your password");
          } else {
            resolve(res.data);
          }
          commit("setToken", res.data.result[0].token);
          localStorage.setItem("role", res.data.result[0].role);
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      commit("reset_user");
      resolve();
    });
  },
};

const mutations = {
  set_user(state, data) {
    (state.user = data), (state.isLoggedIn = true);
  },
  reset_user(state) {
    (state.user = null), (state.isLoggedIn = false), (state.authtoken = null);
  },
  setToken(state, data) {
    state.authtoken = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
