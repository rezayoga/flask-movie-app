import axios from "axios";
/**
 * Auth store and dispatcher for API subscriber.
 * @Author Reza Yogaswara
 */
export default {
  namespaced: true,

  state: {
    token: null,
    user: null,
  },

  getters: {
    authenticated(state) {
      return state.token && state.user;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      const path = "auth/signin";
      await axios({
        method: "get",
        url: path,
        auth: {
          username: credentials.username,
          password: credentials.password,
        },
      })
        .then((response) => {
          //console.log("Authenticated");
          return dispatch("attempt", response.data.token);
        })
        .catch((error) => {
          //console.log("Error on Authentication");
          this.error = error;
          //console.log(error);
        });
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }

      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get("auth/me");
        commit("SET_USER", response.data);
      } catch (e) {
        console.error(e);
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },

    signOut({ commit }) {
      return axios.get("auth/signout").then(() => {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      });
    },
  },
};
