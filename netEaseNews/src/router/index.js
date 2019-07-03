import Home from '@/page/Home'
import Picture from '@/page/homeComponents/Picture'
import Easetime from '@/page/homeComponents/Easetime'
import Arcticle from '@/components/Arcticle'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Headlines',
          name: 'Headlines',
          component (resolve) {
            require(['@/page/homeComponents/Headlines'], resolve)
          }
        },
        {
          path: '/Joke',
          name: 'Joke',
          component (resolve) {
            require(['@/page/homeComponents/Joke'], resolve)
          }
        },
        {
          path: '/City',
          name: 'City',
          component (resolve) {
            require(['@/page/homeComponents/City'], resolve)
          }
        },
        {
          path: '/Easetime',
          name: 'Easetime',
          component: Easetime
        },
        {
          path: '/Picture',
          name: 'Picture',
          component: Picture
        }
      ]
    },
    {
      path: '/Video',
      name: 'Video',
      component (resolve) {
        require(['@/page/Video'], resolve)
      }
    },
    {
      path: '/Chat',
      name: 'Chat',
      component (resolve) {
        require(['@/page/Chat'], resolve)
      },
      children: [
        {
          path: '/Chat/recommand',
          name: 'Recommand',
          component (resolve) {
            require(['@/page/chatComponents/recommand'], resolve)
          }
        },
        {
          path: '/Chat/follow',
          name: 'Follow',
          component (resolve) {
            require(['@/page/chatComponents/follow'], resolve)
          }
        }
      ]
    },
    {
      path: '/Mine',
      name: 'Mine',
      component (resolve) {
        require(['@/page/Mine'], resolve)
      }
    },
    {
      path: '/Arcticle',
      name: 'Arcticle',
      component: Arcticle
    }
  ]
})
