<template>
  <div class="container">
    <div class="card" v-for="(item,index) of feedio" :key='index'>
      <div class="text">{{item.text}}</div>
      <div class="img-con">
        <img :src="item.img[0]" alt="">
        <img :src="item.img[1]" alt="">
        <img :src="item.img[2]" alt="" id="imgLast">
      </div>
      <span class="src">{{item.src}}</span>
      <span class="follow">{{item.follow}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feedio'],
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  border-bottom 1px solid #ccc
  padding .16rem /* 6/37.5 */
  font-size 0
  .text
    font-size .426667rem /* 16/37.5 */
    line-height 1.5
    margin-bottom .266667rem .213333rem /* 8/37.5 */
  img
    display inline-block
    width 33%
    margin .133333rem /* 5/37.5 */ 0
    margin-right .5%
    margin-bottom .266667rem /* 10/37.5 */
  #imgLast
    margin-right 0
  span
    color #aaa
    font-size .266667rem /* 10/37.5 */
  .src
    margin-right .266667rem /* 10/37.5 */
</style>
