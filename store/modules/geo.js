const state = () => ({
  position: {},
  changeCity: {}
})

const mutations = {
  setPosition(state, val) {
    state.position = val
  },
  setChangeCity(state, val) {
    state.changeCity = val
  }
}

const actions = {
  setPosition: ({ commit }, position) => {
    commit('setPosition', position)
  },
  setChangeCity: ({ commit }, changeCity) => {
    commit('setChangeCity', changeCity)
  }
}

export default { namespaced: true, state, mutations, actions }
