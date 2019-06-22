<template>
  <div class="page">
    <div class="card" v-for="(item,index) of feedStream" :key='index'>
      <div class="text">{{item.text}}</div>
      <div class="img-con">
        <img :src="item.img" alt="">
      </div>
      <span class="src">{{item.src}}</span>
      <span class="follow">{{item.follow}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      feedStream: [
        {
          text: '轻松一刻: NBA篮球新秀状元出炉！他姓蔡',
          img: 'https://nie.res.netease.com/r/pic/20180817/4b8604e7-716f-48db-a1b8-d906e7444c29.jpg',
          src: '轻松一刻工作室',
          follow: '4414跟帖'
        },
        {
          text: '为啥世界各国都规定18岁成年？不是16，也不是19?',
          img: 'https://nie.res.netease.com/r/pic/20180817/74b77336-b3f7-4b82-b35d-547afddacf50.jpg',
          src: '胖遍怪聊',
          follow: '84跟帖'
        },
        {
          text: '宇宙最大背锅侠"水逆"，究竟是怎么回事？',
          img: 'https://nie.res.netease.com/r/pic/20180817/68e7ea5a-8828-486e-91cd-1ec5ee4e2303.jpg',
          src: '曲大师',
          follow: '61跟帖'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  border-bottom 1px solid #ccc
  padding .213333rem /* 8/37.5 */
  font-size 0
  .text
    font-size .426667rem /* 16/37.5 */
    line-height 1.5
    margin-bottom .266667rem .213333rem /* 8/37.5 */
  .img-con
    overflow hidden
    height 4rem /* 150/37.5 */
    margin-top .133333rem /* 5/37.5 */
    margin-bottom .213333rem /* 8/37.5 */
    img
      display inline-block
      width 100%
  span
    color #aaa
    font-size .266667rem /* 10/37.5 */
  .src
    margin-right .266667rem /* 10/37.5 */
</style>
