export const state = {
  isLoading: false
}

export const mutations = {
  showLoading: (state, show) => {
    state.isLoading = show
  }
}

export const actions = {
  showLoading: ({ commit }, show) => { commit('showLoading', show) }
}

export const getters = {
  isLoading: () => state.isLoading
}
