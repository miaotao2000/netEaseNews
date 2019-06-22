import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Headlines from '@/page/homeComponents/Headlines'
import Joke from '@/page/homeComponents/Joke'
import City from '@/page/homeComponents/City'
import Easetime from '@/page/homeComponents/Easetime'
import Picture from '@/page/homeComponents/Picture'
import Video from '@/page/Video'
import Mine from '@/page/Mine'
import Chat from '@/page/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Headlines',
          name: 'Headlines',
          component: Headlines
        },
        {
          path: '/Joke',
          name: 'Joke',
          component: Joke
        },
        {
          path: '/City',
          name: 'City',
          component: City
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
      component: Video
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
