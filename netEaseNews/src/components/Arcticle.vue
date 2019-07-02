<template>
  <div class="page">
    <div class="header">
      <div class="icon" @click="back" v-show="comments">
        <img src="../assets/article/left.svg" alt="">
      </div>
      <div class="icon" @click="toArticle" v-show="!comments">
        <img src="../assets/article/left.svg" alt="">
      </div>
      <div class="avatar-con" v-show="comments">
        <img src="../assets/video/avatar.svg" alt="" v-show="show">
      </div>
      <div class="nickname-con" v-show="comments">
        <div class="nickname" v-show="show">{{article.src}}</div>
      </div>
      <div class="follow-btn-con" @click="toPost" v-show="comments">
        <div class="follow-btn" :class="show?'show':''">
          {{show?'已有':''}}{{article.follow}}人参与跟帖
        </div>
      </div>
    </div>
    <div class="bscroll" ref="bscrll" v-show='comments'>
    <div class="warp" ref='warp' @touchmove='pullUp' @touchend='pullUpFinish'>
    <div class="container">
      <div class="mt"></div>
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
    <div class="comments-con" ref="comments"></div>
    <comments :id='article.id' :needMore='true' @reply='reply' :newother='newother'/>
    <div class="tip" v-show="tipShow">
      <div class="empty"></div>
      <div class="img-con"><img :src='tipImg[tipIndex]' alt=""></div>
      <div>{{tipMsg}}</div>
    </div>
  </div>
</div>
    <div class="newcomments-con" v-show="!comments" @touchmove='closeInput'>
    <newcomments :id='article.id' :newflo='newflo' @reply='reply' :newother='newotherfromNew'/>
    </div>
    <write :trueWrite='trueWrite' @write='write' :flonumber='article.follow'/>
    <true-write :trueWrite='trueWrite' @send='send' :reply='replySend.item.nickName'/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import sumTime from '../../util/sumTime'
import comments from '@/components/comments'
import BScroll from 'better-scroll'
import write from '@/components/writeFollow'
import trueWrite from '@/components/trueWrite'
import newcomments from '@/components/newComments'
export default {
  components: {
    'comments': comments,
    'write': write,
    'true-write': trueWrite,
    'newcomments': newcomments
  },
  data () {
    return {
      trueWrite: false,
      article: null,
      show: false,
      myscroll: null,
      scrollY: null,
      tipShow: false,
      maxY: 0,
      tipMsg: '上拉关闭此当前页',
      timeout: null,
      close: false,
      tipImg: [
        '../../static/imgs/top.svg',
        '../../static/imgs/close.svg'
      ],
      tipIndex: 0,
      clientY: 0,
      comments: true,
      newflo: '',
      replySend: {
        item: ''
      },
      newother: '',
      newotherfromNew: ''
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
      'noTabbar',
      'openLogin'
    ]),
    closeInput () {
      this.trueWrite = false
    },
    toArticle () {
      this.comments = true
      this.myscroll.scrollTo(0, 0, 1000, 'ease')
    },
    toPost () {
      this.comments = false
    },
    back () {
      this.$router.push({name: this.$store.state.route[0], params: {state: 'back'}})
      let shift = this.shiftRoute()
      this.pushRoute(shift)
    },
    pullUp () {
      this.trueWrite = false
      if (this.maxY - this.scrollY >= 60 && this.maxY) {
        this.tipMsg = '释放关闭此页'
        this.tipIndex = 1
        this.close = true
      } else {
        this.tipMsg = '上拉关闭此页'
        this.tipIndex = 0
        this.close = false
      }
    },
    pullUpFinish () {
      if (this.close) {
        this.back()
      }
    },
    reply (item) {
      this.write('noscroll')
      this.replySend = item
    },
    write (way) {
      if (this.$store.state.login) {
        this.trueWrite = true
        if (way === 'noscroll') {
          return
        }
        this.myscroll.scrollToElement(this.$refs['comments'], 1000)
      } else {
        this.openLogin()
      }
    },
    send (opt) {
      if (this.replySend) {
        this.$http.post('/otherflo', {
          content: opt,
          userId: this.$store.state.user.id,
          articleId: this.article.id,
          floId: this.replySend.item.userId
        }).then(res => {
          // this.$message({
          //   showClose: true,
          //   message: res.data.msg,
          //   type: 'success'
          // })
          this.trueWrite = false
          if (this.replySend.way === 'new') {
            this.newotherfromNew = {
              nickName: this.$store.state.user.nickName,
              content: opt,
              encourage: 0,
              floId: this.replySend.item.userId
            }
          }
          this.newother = {
            nickName: this.$store.state.user.nickName,
            content: opt,
            encourage: 0,
            floId: this.replySend.item.userId
          }
          this.trueWrite = false
        })
        return
      }
      this.$http.post('/follow', {
        content: opt,
        userId: this.$store.state.user.id,
        articleId: this.article.id
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        })
        this.newflo = {...res.data.newflo, nickName: this.$store.state.user.nickName}
        this.toPost()
        this.trueWrite = false
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.myscroll = new BScroll(this.$refs['bscrll'], {
        probeType: 3,
        pullUpLoad: true,
        click: true
      })
      this.myscroll.on('scroll', pos => {
        this.scrollY = pos.y
        this.tipShow = true

        if (this.scrollY < -100) {
          this.show = true
        } else {
          this.show = false
        }
      })
      this.myscroll.on('pullingUp', () => {
        this.maxY = this.scrollY
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.tip
  bottom 1.333333rem /* 50/37.5 */
  text-align center
  font-size .4rem /* 15/37.5 */
  padding .266667rem /* 10/37.5 */
  display flex
  align-items center
  .empty
    flex 3
  .img-con
    flex .5
    display flex
    align-items center
    img
      width .533333rem /* 20/37.5 */
      margin-right .133333rem /* 5/37.5 */
      margin-top .133333rem /* 5/37.5 */
  div
    flex 5
    text-align left
.bscroll
  height 100vh
  overflow hidden
.container
  background white
  padding 0 .4rem /* 15/37.5 */
.page
  box-sizing border-box
  background-color #E7EBED
  .header
    background white
    display flex
    align-items center
    padding .266667rem /* 10/37.5 */.266667rem /* 10/37.5 */
    position fixed
    top 0
    left 0
    width 100%
    box-sizing border-box
    background-color #fff
    z-index 100
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
  .mt
    height 1.466667rem /* 55/37.5 */
  .title
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
.newcomments-con
  margin-top 1.066667rem /* 40/37.5 */
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
