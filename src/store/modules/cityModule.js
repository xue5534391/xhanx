
const state = {
  cityData: window.sessionStorage.getItem('city') ? JSON.parse(window.sessionStorage.getItem('city')) : null
}
const getters = {
  cityName (state) {
    return state.cityData ? state.cityData.name : ''
  }
}
const mutations = {
  SET_CITY_NAME (state, payload) {
    state.cityData = payload
    // 将payload存储到sessionStorage
    window.sessionStorage.setItem('city', JSON.stringify(payload))
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
