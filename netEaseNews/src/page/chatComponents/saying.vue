<template>
  <div class="container">
    <div class="saying-con" v-for="(item, index) of saying" :key='index'>
    <div class="header">
      <img src="../../assets/video/avatar.svg" alt="" class="avatar">
      <div class="intro">
        <div class="nickName">{{item.nickName}}</div>
        <div class="detail">{{item.detail}}</div>
      </div>
      <div class="btn">
        关注
      </div>
      <img src="" alt="" class="close">
    </div>
    <div class="content">{{item.content}}</div>
    <div class="other">
      <img :src="item.other" alt="">
    </div>
    <div class="control">
      <div class="praise">
        <img src="../../assets/video/praise.svg" alt="">
        <span>{{item.praise}}</span>
      </div>
      <div class="comment">
        <img src="../../assets/joke/comment.svg" alt="">
        <span>{{item.comment}}</span>
      </div>
      <div class="share">
        <img src="../../assets/joke/share.svg" alt="">
        <span>分享</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saying: [
        {
          nickName: '不想回家的猫',
          detail: '',
          content: '中国历史朝代更迭的主要原因是马尔萨斯陷阱以及气候周期变化。\n朝代更迭的原因\n' +
          '马尔萨斯陷阱=气候周期变化>朝廷能力>皇帝个人能力。\n所以，别骂我们历史上的亡国皇帝了，他们' +
          '不该背这个锅',
          praise: 199,
          comment: 42,
          other: 'https://nie.res.netease.com/r/pic/20181112/c84f541f-4a9d-4e91-b771-16fe4d7c189d.jpg'
        },
        {
          nickName: '淼哥故事会',
          detail: '',
          content: '嘉慧：给您重点交代一下羊水栓塞的问题，发生率很低，发生了您就上电视了。',
          praise: 161,
          comment: 11,
          other: 'https://nie.res.netease.com/r/pic/20180817/4b8604e7-716f-48db-a1b8-d906e7444c29.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.saying-con
  margin-bottom .133333rem /* 5/37.5 */
  padding 0 .213333rem /* 8/37.5 */
  background-color white
  .header
    display flex
    padding .266667rem /* 10/37.5 */ 0
    align-items center
    img
      width .8rem /* 30/37.5 */
      height .8rem /* 30/37.5 */
      margin-right .133333rem /* 5/37.5 */
      flex 1
    .intro
      flex 7
    .btn
      flex 1.5
      text-align center
      background-color #E54D42
      color white
      padding .133333rem /* 5/37.5 */.026667rem /* 1/37.5 */
      border-radius .4rem /* 15/37.5 */
    .close
      flex .5
  .content
    white-space: pre-wrap
    line-height 1.5
    font-size .373333rem /* 14/37.5 */
  .other
    margin-top .266667rem /* 10/37.5 */
    height 4rem /* 150/37.5 */
    overflow hidden
    img
      width 65%
  .control
    display flex
    padding .266667rem /* 10/37.5 */0
    img
      width .533333rem /* 20/37.5 */
      height .533333rem /* 20/37.5 */
      margin-left .933333rem /* 35/37.5 */
      margin-right .133333rem /* 5/37.5 */
    span
    .praise,.comment,.share
      flex 1
      display flex
      align-items center
</style>
