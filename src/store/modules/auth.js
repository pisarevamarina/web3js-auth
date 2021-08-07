export default {
  namespaced: true,
  state: {
    account: null,
  },
  mutations: {
    account(state, value) {
      state.account = value
    },
  },
  getters: {
    account(state) {
      return state.account
    }
  },
}
