import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        global.console.log('this' + this)
        // global.console.log('province' + province)
        global.console.log('this.$store' + this.$store)
        const {
          status,
          data: { province, city }
        } = await app.$axios.get('/geo/getPosition')
        commit(
          'geo/setPosition',
          status === 200 ? { province, city } : { province: '', city: '' }
        )
        const {
          status: status2,
          data: { menu }
        } = await app.$axios.get('/geo/menu')
        commit('home/setMenu', status2 === 200 ? menu : [])
        const {
          status: status3,
          data: { result }
        } = await app.$axios.get('/search/hotPlace', {
          params: {
            city: app.store.state.geo.position.city.replace('市', '')
          }
        })
        commit('home/setHotPlace', status3 === 200 ? result : [])
      }
    },
    strict: true
  })

export default store
