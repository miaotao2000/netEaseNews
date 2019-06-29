<template>
  <div class="page" @touchmove='scroll'>
    <div class="warp">
    <div class="header">
      <div class="icon" @click="back">
        <img src="../assets/article/left.svg" alt="">
      </div>
      <div class="avatar-con">
        <img src="../assets/video/avatar.svg" alt="" v-show="show">
      </div>
      <div class="nickname-con">
        <div class="nickname" v-show="show">{{article.src}}</div>
      </div>
      <div class="follow-btn-con">
        <div class="follow-btn" :class="show?'show':''">
          {{show?'已有':''}}{{article.follow}}人参与跟帖
        </div>
      </div>
    </div>
    <div class="container">
      <div class="title">
        {{article.text}}
      </div>
      <div class="author">
      <img src="../assets/video/avatar.svg" alt="" class="avatar">
      <div class="intro">
        <div class="nickName">{{article.src}}</div>
        <div class="time">{{time}}</div>
      </div>
      <div class="btn">
        关注
      </div>
    </div>

    <div id="article" v-html="article.html"></div>
    </div>
    </div>
    <comments />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import sumTime from '../../util/sumTime'
import comments from '@/components/comments'
export default {
  components: {
    'comments': comments
  },
  data () {
    return {
      article: null,
      show: false
    }
  },
  created () {
    this.article = this.$route.params.item
    this.noTabbar()
  },
  destroyed () {
    this.needTabbar()
  },
  computed: {
    time () {
      return sumTime(this.article.time)
    }
  },
  methods: {
    ...mapActions([
      'pushRoute',
      'shiftRoute',
      'needTabbar',
      'noTabbar'
    ]),
    back () {
      this.$router.push({name: this.$store.state.route[0], params: {state: 'back'}})
      let shift = this.shiftRoute()
      this.pushRoute(shift)
    },
    scroll (el) {
      if (document.documentElement.scrollTop >= 100) {
        console.log('ok')
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.warp
  background white
  padding 0 .4rem /* 15/37.5 */
.page
  box-sizing border-box
  background-color #E7EBED
  .header
    display flex
    align-items center
    padding .266667rem /* 10/37.5 */.266667rem /* 10/37.5 */
    position fixed
    top 0
    left 0
    width 100%
    box-sizing border-box
    background-color #fff
    .icon
      flex 1
      padding .08rem /* 3/37.5 */0
      img
        width .533333rem /* 20/37.5 */
    .follow-btn-con
      flex 4
      position relative
      .follow-btn
        position absolute
        right 0
        top 50%
        transform translatey(-50%)
        color #EA6F5A
        border 1px solid #EA6F5A
        text-align center
        border-radius .4rem /* 15/37.5 */
        padding .133333rem /* 5/37.5 */
        transition all .5s
        width 2.933333rem /* 110/37.5 */
      .show
        background-color #E54D42
        color white
        width 130px
    .avatar-con
      flex 1
      display flex
      img
        width .8rem /* 30/37.5 */
        height .8rem /* 30/37.5 */
        align-items center
        animation 1s show ease forwards
    .nickname-con
      flex 4
      font-size .373333rem /* 14/37.5 */
      .nickname
        animation .5s show ease forwards
  .title
    margin-top 1.466667rem /* 55/37.5 */
    font-weight bold
    font-size .533333rem /* 20/37.5 */
    margin-bottom .266667rem /* 10/37.5 */
  .author
    display flex
    padding .266667rem /* 10/37.5 */ 0
    align-items center
    img
      width .8rem /* 30/37.5 */
      height .8rem /* 30/37.5 */
      margin-right .133333rem /* 5/37.5 */
      flex 1
    .intro
      flex 10
      .time
        color #aaa
    .btn
      flex 3
      background-color #E54D42
      color white
      padding .133333rem /* 5/37.5 */.026667rem /* 1/37.5 */
      border-radius .4rem /* 15/37.5 */
      text-align center
@keyframes show {
  0% {
    opacity 0
  }
  100% {
    opacity 1
  }
}
</style>

<style lang="stylus">
#article
  p
    text-align center
    line-height 2.666667rem /* 100/37.5 */
    font-size .746667rem /* 28/37.5 */
    img
      width 100%
      margin bottom .4rem /* 15/37.5 */
      margin-top .933333rem /* 35/37.5 */
</style>
