<template>
  <div class="page">
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading" loosing-text=' '>
      <van-list @load="loading" :offset="45" :finished="finished" :immediate-check="false">
        <card :feedio="news"/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import card from '@/page/homeComponents/CardContent'
import { Notify } from 'vant'
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
      page: 0
    }
  },
  methods: {
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
            this.news = news.concat(this.news)
          }
          this.news = this.news.concat(news)
          this.getting = false
        })
    },
    loading () {
      console.log('reach')
      this.getHeadlines(this.page)
    },
    onRefresh () {
      this.getHeadlines(this.page, 'top')
      Notify({
        message: '成功为您推荐5条新闻',
        duration: 500,
        className: 'notify'
      })
      setTimeout(() => {
        this.isLoading = false
      }, 800)
    }
  },
  created () {
    if (this.$route.params.state !== 'back') {
      this.getHeadlines(this.page)
    } else {
      this.news = this.$store.state.cache
    }
  }
}
</script>

<style lang="stylus">
.notify
  top 2.4rem /* 90/37.5 */
  left 50%
  transform translateX(-50%)
  animation show .2s linear forwards
  opacity 1
@keyframes show {
  0% {
    width 70%
  }
  10%{
    width 100%
  }
}
</style>
