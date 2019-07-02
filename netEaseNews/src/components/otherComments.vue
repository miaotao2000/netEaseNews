<template>
  <div class="other-con">
     <div class="card" v-for="(item, index) of other" :key='index'>
      <div class="card-header">
        <div class="avatar">
          <img src='../assets/video/avatar.svg' alt="">
        </div>
        <div class="nickName">{{item.nickName}}</div>
        <div class="encourage">
          <div>{{item.encourage}}</div>
          <img :src="includes(index)?praisehover:praise" alt="" @click="praised(index)">
        </div>
      </div>
      <div class="comments">
        <div class="left"></div>
        <div class="right">
          <div class="content">
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['other'],
  data () {
    return {
      active: [],
      praise: '../../static/imgs/praise.svg',
      praisehover: '../../static/imgs/praise-hover.svg'
    }
  },
  methods: {
    includes (index) {
      return this.active.includes(index)
    },
    praised (index) {
      if (!this.includes(index)) {
        this.other[index].encourage = +this.other[index].encourage + 1
        this.active.push(index)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.other-con
  margin-bottom .133333rem /* 5/37.5 */
  .card
    background-color #f8f8f8
    margin-right .533333rem /* 20/37.5 */
    border 1px solid #cccccc
    border-radius .08rem /* 3/37.5 */
    .card-header
      display flex
      align-items center
      margin-top .133333rem /* 5/37.5 */
      img
        flex 1
        width .8rem /* 30/37.5 */
        margin-left .266667rem /* 10/37.5 */
      .nickName
        flex 7
        font-size .373333rem /* 14/37.5 */
        margin-left .266667rem /* 10/37.5 */
        margin-top -.266667rem /* 10/37.5 */
        color #2472C8
      .encourage
        flex 2
        display flex
        align-items center
        margin-right .266667rem /* 10/37.5 */
        img
          width .426667rem /* 16/37.5 */
          height .426667rem /* 16/37.5 */
          flex 1
        div
          flex 2
          text-align right
          margin-top .053333rem /* 2/37.5 */
    .comments
      display flex
      .left
        flex 1
      .right
        flex 9
        margin-left .266667rem /* 10/37.5 */
        .content
          font-size .373333rem /* 14/37.5 */
          margin-left .4rem /* 15/37.5 */
          margin-bottom .266667rem /* 10/37.5 */
        .repeat
          display flex
          font-size .32rem /* 12/37.5 */
          align-items center
          .time
            margin-right .32rem /* 12/37.5 */
            color #666
</style>
