<template>
  <div class="container">
    <div class="header">
      <img src="../../assets/hot-theme/hot.svg" alt="" class="icon">
      <div class="title">热门主题</div>
      <div class="look-more">
        <div class="content">查看更多</div>
        <img src="../../assets/hot-theme/right.svg" alt="">
      </div>
    </div>
    <div class="swiper-con">
    <div class="swiper">
      <div class="item" v-for="(item, index) of themes" :key='index'
      :style="'background-image:url('+item.bgImg+')'">
        <div class="mask"></div>
        <div class="item-title">{{item.title}}</div>
        <div class="people">{{item.people}}万人参与</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      themes: [
        {
          title: '你必须要知道的头等大事',
          people: 76.9,
          bgImg: 'https://nie.res.netease.com/r/pic/20180817/74b77336-b3f7-4b82-b35d-547afddacf50.jpg'
        },
        {
          title: '值得关注的民生小事',
          people: 160.3,
          bgImg: 'https://nie.res.netease.com/r/pic/20180817/68e7ea5a-8828-486e-91cd-1ec5ee4e2303.jpg'
        },
        {
          title: '娱乐圈吃瓜阵地',
          people: 110.6,
          bgImg: 'https://nie.res.netease.com/r/pic/20181112/e47142f6-d42a-485d-b6a3-e208cf6d199a.jpg'
        },
        {
          title: 'NBA赛场',
          people: 130.5,
          bgImg: 'https://nie.res.netease.com/r/pic/20180817/4b8604e7-716f-48db-a1b8-d906e7444c29.jpg'
        },
        {
          title: '大公司情报局',
          people: 117.1,
          bgImg: 'https://nie.res.netease.com/r/pic/20181112/d6a0da64-8d8d-441f-9a10-07344762ab85.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color #e6e6e6
.header
  display flex
  padding .133333rem /* 5/37.5 */
  align-items center
  background-color white
  img
    width .4rem /* 15/37.5 */
    height .4rem /* 15/37.5 */
    flex 1
  .title
    flex 7
    font-weight bold
    font-size .373333rem /* 14/37.5 */
  .look-more
    flex 2
    display flex
    align-items center
    img
      width .48rem /* 18/37.5 */
      height .48rem /* 18/37.5 */
    .content
      color #666
.swiper-con
  height 1.866667rem /* 70/37.5 */
  padding-left .266667rem /* 10/37.5 */
  padding-top .266667rem /* 10/37.5 */
  overflow hidden
  background-color white
  .swiper
    overflow-x scroll
    white-space nowrap
    height 2rem /* 75/37.5 */
    .item
      width 3.2rem /* 120/37.5 */
      height 1.866667rem /* 70/37.5 */
      display inline-block
      margin-right .213333rem /* 8/37.5 */
      white-space normal
      color white
      border-radius 5px
      position relative
      .mask
        width 100%
        height 100%
        background-color rgba(0,0,0,.3)
        position absolute
        border-radius .133333rem /* 5/37.5 */
      .item-title
        padding .133333rem /* 5/37.5 */
        position absolute
      .people
        position absolute
        bottom 0
        padding .133333rem /* 5/37.5 */
</style>
