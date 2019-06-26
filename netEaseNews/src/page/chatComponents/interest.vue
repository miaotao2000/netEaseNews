<template>
  <div class="container">
    <div class="header">
      这里的内容超好看
    </div>
     <div class="interest" v-for="(item,index) of interest" :key='index'>
      <img src="../../assets/video/avatar.svg" alt="" class="avatar">
      <div class="intro">
        <div class="name">{{item.name}}</div>
        <div class="detail">
          <div class="join">{{item.join}}人参与</div>
          <div class="follow">{{item.follow}}人关注</div>
        </div>
      </div>
      <div class="btn">
        关注
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      interest: [
        {
          name: '你必须知道的头等大事',
          join: '78.4万',
          follow: '7.9万'
        },
        {
          name: '值得关注的民生小事',
          join: '162.1万',
          follow: '12.5万'
        },
        {
          name: '娱乐圈吃瓜阵地',
          join: '111.4万',
          follow: '22.1万'
        },
        {
          name: '大公司情报局',
          join: '117.8万',
          follow: '9.2万'
        },
        {
          name: '高口碑影视集中营',
          join: '144.2万',
          follow: '25.5万'
        },
        {
          name: '云端健身房',
          join: '28.5万',
          follow: '8.6万'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color white
  padding 0 .266667rem /* 10/37.5 */
  .header
    font-weight bold
    font-size .373333rem /* 14/37.5 */
    padding .133333rem /* 5/37.5 */0
  .interest
      display flex
      padding .4rem /* 15/37.5 */ 0
      align-items center
      border-bottom 1px solid #ddd
      img
        width 1.333333rem /* 50/37.5 */
        height 1.333333rem /* 50/37.5 */
        margin-right .133333rem /* 5/37.5 */
        flex 1
      .intro
        flex 7
        font-size .373333rem /* 14/37.5 */
        .detail
          display flex
          color #666
          padding .08rem /* 3/37.5 */0
          font-size .293333rem /* 11/37.5 */
          margin-top .133333rem /* 5/37.5 */
        .join
          flex 1
          margin-right .133333rem /* 5/37.5 */
        .follow
          flex 2
      .btn
        flex 1.5
        text-align center
        background-color #E54D42
        color white
        padding .133333rem /* 5/37.5 */.026667rem /* 1/37.5 */
        border-radius .4rem /* 15/37.5 */
</style>
