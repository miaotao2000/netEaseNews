<template>
  <div class="page">
    <div class="header">
      <div class="icon">
        <img src="../assets/article/left.svg" alt="">
      </div>
      <div class="follow-btn">
        {{article.follow}}人参与跟帖
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
</template>

<script>
import sumTime from '../../util/sumTime'
export default {
  data () {
    return {
      article: null
    }
  },
  created () {
    this.article = this.$route.params.item
  },
  computed: {
    time () {
      return sumTime(this.article.time)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  box-sizing border-box
  padding 0 .4rem /* 15/37.5 */
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
      flex 7
      img
        width .533333rem /* 20/37.5 */
    .follow-btn
      flex 3
      padding .133333rem /* 5/37.5 */
      color #EA6F5A
      border 1px solid #EA6F5A
      text-align center
      border-radius .4rem /* 15/37.5 */
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
