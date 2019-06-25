<template>
  <div class="page">
    <div class="joke-con" v-for="(item,index) of joke" :key='index'>
      <div class="text">{{item.text}}</div>
      <div class="excellent_comment">
        <span class="id">{{item.eltCmt.id}}：</span>
        <span class="content">{{item.eltCmt.content}}</span>
      </div>
      <div class="footer">
      <div class="evaluate">
          <img src="../../assets/joke/laugh.svg" alt="">
          <div>{{item.high}}</div>
          <img src="../../assets/joke/lover.svg" alt="">
          <div>{{item.mid}}</div>
          <img src="../../assets/joke/boring.svg" alt="">
          <div>{{item.low}}</div>
      </div>
      <div class="share">
          <img src="../../assets/joke/comment.svg" alt="">
          <div>{{item.comment}}</div>
          <img src="../../assets/joke/share.svg" alt="">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      joke: [
        {
          text: '刚接到一个诈骗电话。"我系来治东北的黑社慧，你额几现在在我手上。"沉默了两秒，对方自己把电话挂了……',
          eltCmt: {
            id: '国际第五纵队',
            content: '你就不会回他?偶系渣渣灰，点一下玩一年，装备不花一分钱'
          },
          high: 10957,
          mid: 4939,
          low: 814,
          comment: 144
        },
        {
          text: '一个哥们，一吃月饼就拉肚子。那天，我很好奇，就和他一起吃，只见他拿出月饼。华丽的撕开干燥剂，洒在月饼' +
          '一口咬下去，回头对我说："你吃月饼不洒佐料吗？"',
          eltCmt: {
            id: '火星网友',
            content: '首先，我很同情你有这么一个傻吊朋友，其次，物以类聚，我也知道你的智商也不咋滴。'
          },
          high: 10579,
          mid: 1783,
          low: 570,
          comment: 208
        },
        {
          text: '我外婆，七点半把我叫醒，跟我说:"今天是周六，你可以多睡一会儿。"',
          eltCmt: {
            id: '清晨硕果',
            content: '看来你还不懂啊！清晨被叫醒然后再睡你知道多爽不？'
          },
          high: 10818,
          mid: 1206,
          low: 409,
          comment: 71
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  background-color #E6E6E6
  .joke-con
    background-color white
    padding .186667rem /* 7/37.5 */
    margin-bottom .133333rem /* 5/37.5 */
    .text
      font-size .426667rem /* 16/37.5 */
      line-height 1.5
    .excellent_comment
      background-color #E6E6E6
      font-size .373333rem /* 14/37.5 */
      color #333
      margin-top .266667rem /* 10/37.5 */
      padding .266667rem /* 10/37.5 */
      position relative
      .id
        font-weight bold
      .content
        line-height 1.8
      &::after
        content ''
        position absolute
        border-right  5px solid transparent
        border-left  5px solid transparent
        border-top 8px solid #E6E6E6
        bottom -.213333rem /* 8/37.5 */
        right 2.266667rem /* 85/37.5 */
    .footer
      display flex
      padding .133333rem /* 5/37.5 */0
      .evaluate
        width 70%
        height .8rem /* 30/37.5 */
        margin-top .266667rem /* 10/37.5 */
        display flex
        align-items center
        img
          width 20px
          margin-right .133333rem /* 5/37.5 */
        div
          margin-right .266667rem /* 10/37.5 */
      .share
        width 30%
        height .8rem
        margin-top .266667rem /* 10/37.5 */
        display flex
        align-items center
        img
          width 20px
          margin-left .266667rem /* 10/37.5 */
        div
          margin-left .133333rem /* 5/37.5 */
          margin-right .133333rem /* 5/37.5 */
</style>
