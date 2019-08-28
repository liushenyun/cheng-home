export const state = {
  isLoading: false,
  isSubscribe: true
}

export const mutations = {
  showLoading: (state, show) => {
    state.isLoading = show
  },
  showScan: (state, show) => {
    state.isSubscribe = show
  }
}

export const actions = {
  showLoading: ({ commit }, show) => { commit('showLoading', show) },
  showScan: ({ commit }, show) => { commit('showScan', show) }
}

export const getters = {
  isLoading: () => state.isLoading,
  isSubscribe: () => state.isSubscribe
}
