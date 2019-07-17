<template>
  <div class="page">
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading" loosing-text=' '>
      <van-list @load="loading" :offset="45" :finished="finished" :immediate-check="false">
        <card :feedio="news" :cache='cache'/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import card from '@/page/homeComponents/CardContent'
import { Notify } from 'vant'
import { mapActions } from 'vuex'
export default {
  components: {
    card: card
  },
  data () {
    return {
      news: [],
      finished: false,
      getting: false,
      isLoading: false,
      page: 0,
      cache: false
    }
  },
  methods: {
    ...mapActions([
      'changePage'
    ]),
    getHeadlines (page, way) {
      if (this.getting) {
        return
      }
      this.getting = true
      this.$http
        .get('/articles', {
          params: {
            page
          }
        })
        .then(res => {
          let news = res.data.news.map(info => {
            return {
              ...info,
              read: 0
            }
          })

          if (this.page) {
            this.page = 0
          } else {
            this.page = 1
          }

          if (way === 'top') {
            this.news = news
          }
          this.news = this.news.concat(news)
          this.getting = false
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
    },
    loading () {
      this.getHeadlines(this.page)
    },
    onRefresh () {
      this.getHeadlines(this.page, 'top')
      Notify({
        message: '成功为您推荐5条新闻',
        className: 'notify',
        duration: 800
      })
    }
  },
  beforeDestroy () {
    this.changePage({
      page: this.page,
      name: 'headlines'
    })
  },
  created () {
    this.page = this.$store.state.home.page['headlines']
    if (this.$route.params.state !== 'back') {
      this.getHeadlines(this.page)
    } else {
      this.news = this.$store.state.home.caches['headlines']
      this.cache = true
    }
  }
}
</script>

<style lang="stylus">
.notify
  top 2.4rem /* 90/37.5 */
  left 50%
  transform translateX(-50%)
  animation show .1s linear
  opacity 1
@keyframes show {
  0% {
    width 70%
    top 0
  }
  10%{
    width 100%
    top 2.4rem /* 90/37.5 */
  }
}
</style>
