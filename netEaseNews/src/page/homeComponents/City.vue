<template>
  <div class="page">
    <div class="card-con" v-for="(item,index) of feedStream" :key='index'>
    <div class="card">
      <div class="text">{{item.text}}</div>
      <span class="src">{{item.src}}</span>
      <span class="follow">{{item.follow}}</span>
    </div>
    <div class="img">
      <img :src="item.img" alt="">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      feedStream: [
        {
          text: '南昌地铁二号线传来大消息!后通段各站点曝',
          src: '南昌晚报',
          follow: '656跟帖',
          img: 'http://60.205.203.205:8080/imgs/nsh10.jpg'
        },
        {
          text: '教育部发布！江西2019高效名单出炉！共121所！',
          src: '南昌资讯',
          follow: '7跟帖',
          img: 'http://60.205.203.205:8080/imgs/nsh8.jpg'
        },
        {
          text: '昌西南收费站争议：没有快速路也被自动多收费',
          src: '醉南昌',
          follow: '55跟帖',
          img: 'http://60.205.203.205:8080/imgs/nsh15.jpg'
        },
        {
          text: '"我姐姐让我加你，有事请教"注意！诈骗又有新招',
          src: '赣州晚报',
          follow: '31跟帖',
          img: 'http://60.205.203.205:8080/imgs/nsh5.jpg'
        },
        {
          text: '抚州一男子不服处罚 迟到恐吓被拘！',
          src: '抚州发布',
          follow: '',
          img: 'http://60.205.203.205:8080/imgs/nsh2.jpg'
        },
        {
          text: '吉安3名男子因公墓山施工阻碍执行，被拘留',
          src: '吉安头条',
          follow: '',
          img: 'http://60.205.203.205:8080/imgs/nsh6.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-con
  display flex
  border-bottom 1px solid #ccc
  .card
    flex 6
    padding .16rem /* 6/37.5 */
    .text
      font-size .426667rem /* 16/37.5 */
      line-height 1.5
      margin-bottom .266667rem /* 10/37.5 */
    span
      color #aaa
      font-size .32rem /* 12/37.5 */
    .src
      margin-right .266667rem /* 10/37.5 */
  .img
    flex 4
    padding .266667rem /* 10/37.5 */
    height 2.133333rem /* 80/37.5 */
    img
      width 100%
      height 100%
</style>
