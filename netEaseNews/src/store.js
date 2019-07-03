import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleHome = {
  state: {
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
    caches: {
      headlines: []
    },
    page: {
      headlines: 0
    }
  },
  mutations: {
    changeActive (state, index) {
      state.active = index
    },
    resetActive (state) {
      state.active = 0
    },
    changeCache (state, opt) {
      let { arr, name } = opt
      state.caches[name] = arr
    },
    changePage (state, opt) {
      let { page, name } = opt
      state.page[name] = page
    },
    changeNavbar (state, navbar) {
      state.navbar = navbar
    },
    changeMoreList (state, moreList) {
      state.moreList = moreList
    }
  },
  actions: {
    changeCache: ({commit}, opt) => commit('changeCache', opt),
    changePage: ({commit}, opt) => commit('changePage', opt),
    changeActive: ({commit}, index) => commit('changeActive', index),
    resetActive: ({commit}) => commit('resetActive')
  }
}

const moduleGlobal = {
  state: {
    user: {
      nickName: '',
      id: ''
    },
    needTabbar: true,
    login: false,
    openLogin: false,
    route: ['/', '/']
  },
  mutations: {
    noTabbar (state) {
      state.needTabbar = false
    },
    needTabbar (state) {
      state.needTabbar = true
    },
    changeLogin (state) {
      state.login = !state.login
    },
    openLogin (state) {
      state.openLogin = true
    },
    hidLogin (state) {
      state.openLogin = false
    },
    setUser (state, user) {
      state.user = user
    },
    pushRoute (state, router) {
      state.route.push(router)
    },
    shiftRoute (state) {
      state.route.shift()
    }
  },
  actions: {
    pushRoute: ({commit}, router) => commit('pushRoute', router),
    shiftRoute: ({commit}) => commit('shiftRoute'),
    noTabbar: ({commit}) => commit('noTabbar'),
    needTabbar: ({commit}) => commit('needTabbar'),
    changeLogin: ({commit}) => commit('changeLogin'),
    openLogin: ({commit}) => commit('openLogin'),
    hidLogin: ({commit}) => commit('hidLogin'),
    setUser: ({commit}, user) => commit('setUser', user)
  }
}

export default new Vuex.Store({
  modules: {
    home: moduleHome,
    global: moduleGlobal
  }
})
