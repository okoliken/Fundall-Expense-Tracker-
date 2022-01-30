import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    logining: false,
    userData: [],
    loginerror: [],
  },
  getters: {
    returnUserData: (state) => state.userData,
    loginerror: (state) => state.loginerror,
  },
  mutations: {
    mutateLoading: (state, payload) => (state.logining = payload),
    mutateUserData: (state, payload) => (state.userData = payload),
    mutateloginerror: (state, payload) => (state.loginerror = payload),
  },
  actions: {
    async loginUser({ commit }, userinput) {
      try {
        commit("mutateLoading", true);
        const request = await fetch(
          "https://campaign.fundall.io/api/v1/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userinput),
          }
        );
        const response = await request.json();

        commit("mutateloginerror", response);

        sessionStorage.setItem("token", response.success.user.access_token);
        commit("mutateLoading", false);
        router.push({ name: "Dashboard" });

        console.log(response);
      } catch (error) {
        console.log(error);
        commit("mutateLoading", false);
      }
    },
    getUserProfile: async ({ commit }) => {
      const token = sessionStorage.getItem("token");
      commit("mutateLoading", true);
      const req = await fetch(
        "https://campaign.fundall.io/api/v1/base/profile",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await req.json();
      commit("mutateUserData", data);
      commit("mutateLoading", false);
      console.log(data);
    },
  },
  modules: {},
});
