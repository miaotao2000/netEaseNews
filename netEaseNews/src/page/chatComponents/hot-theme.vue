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
    <div class="swiper-container">
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
          bgImg: 'http://60.205.203.205:8080/imgs/nsh7.jpg'
        },
        {
          title: '值得关注的民生小事',
          people: 160.3,
          bgImg: 'http://60.205.203.205:8080/imgs/nsh9.jpg'
        },
        {
          title: '娱乐圈吃瓜阵地',
          people: 110.6,
          bgImg: 'http://60.205.203.205:8080/imgs/nsh12.jpg'
        },
        {
          title: 'NBA赛场',
          people: 130.5,
          bgImg: 'http://60.205.203.205:8080/imgs/nsh15.jpg'
        },
        {
          title: '大公司情报局',
          people: 117.1,
          bgImg: 'http://60.205.203.205:8080/imgs/nsh2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  padding .266667rem /* 10/37.5 */
.container
  background-color white
  margin-bottom .133333rem /* 5/37.5 */
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
