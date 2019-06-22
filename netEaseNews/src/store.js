import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  navbar: [
    {
      name: '头条',
      component: 'Headlines'
    },
    {
      name: '段子',
      component: 'Joke'
    },
    {
      name: '南昌',
      component: 'City'
    },
    {
      name: '笑话',
      component: 'Easetime'
    },
    {
      name: '图片',
      component: 'Picture'
    }
  ],
  active: 0
}
const getters = {
  // doneTodos: state => {
  //     return state.count%2 != 0 ? 'odd' : 'even'
  //   }
}

const mutations = {
  changeActive (state, index) {
    state.active = index
  }
  // decrement(state) {
  //     state.count--
  // }
}
const actions = {
  changeActive: ({commit}, index) => commit('changeActive', index)
  // decrement: ({ commit }) => commit('decrement'),
  // incrementIfOdd({ commit, state }) {
  //     if (state.count % 2 != 0)
  //         commit('increment')
  // },
  // incrementAsync({ commit }){
  //     setTimeout(() => {
  //         commit('increment')
  //       }, 1000)
  // }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
