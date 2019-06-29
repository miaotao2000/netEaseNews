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
  moreList: [
    {
      name: '星座',
      component: 'Constellation'
    },
    {
      name: '音乐',
      component: 'Musi'
    },
    {
      name: '教育',
      component: 'Education'
    },
    {
      name: '佛学',
      component: 'Buddhism'
    }
  ],
  active: 0,
  route: ['/', '/'],
  cache: [],
  needTabbar: true
}
const getters = {
  // doneTodos: state => {
  //     return state.count%2 != 0 ? 'odd' : 'even'
  //   }
}

const mutations = {
  changeActive (state, index) {
    state.active = index
  },
  resetActive (state) {
    state.active = 0
  },
  pushRoute (state, router) {
    state.route.push(router)
  },
  shiftRoute (state) {
    state.route.shift()
  },
  changeCache (state, arr) {
    state.cache = arr
  },
  noTabbar (state) {
    state.needTabbar = false
  },
  needTabbar (state) {
    state.needTabbar = true
  }
}
const actions = {
  changeActive: ({commit}, index) => commit('changeActive', index),
  resetActive: ({commit}) => commit('resetActive'),
  pushRoute: ({commit}, router) => commit('pushRoute', router),
  shiftRoute: ({commit}) => commit('shiftRoute'),
  changeCache: ({commit}, arr) => commit('changeCache', arr),
  noTabbar: ({commit}) => commit('noTabbar'),
  needTabbar: ({commit}) => commit('needTabbar')
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
