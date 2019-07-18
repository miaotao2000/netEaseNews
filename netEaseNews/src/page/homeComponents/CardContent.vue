<template>
  <div class="container">
    <div class="card" v-for="(item,index) of feedio" :key='index' @click="link(index)">
      <div class="mask active" v-if='linked===index'></div>
      <div class="text" :class="item.read?'read':''">{{item.text}}</div>
      <div class="img-con">
        <div src="" alt="" v-show="!includes(0) && !cache" class="img"></div>
        <div src="" alt="" v-show="!includes(1) && !cache" class="img"></div>
        <div src="" id='imgLast' alt="" v-show="!includes(2) && !cache" class="img"></div>
        <img :src="item.img[0]" alt="" @load="load(0)" :data-src='item.img[0]' v-show="includes(0) || cache">
        <img :src="item.img[1]" alt="" @load="load(1)" :data-src='item.img[1]' v-show="includes(1) || cache">
        <img :src="item.img[2]" alt="" id="imgLast" @load="load(2)" :data-src='item.img[2]' v-show='includes(2) || cache'>
      </div>
      <span class="src">{{item.src}}</span>
      <span class="follow">{{item.follow}}跟帖</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['feedio', 'cache'],
  data () {
    return {
      linked: '',
      img: []
    }
  },
  methods: {
    link (index) {
      this.linked = index
      let item = this.feedio[index]
      item.read = 1
      setTimeout(() => {
        this.$router.push({name: 'Arcticle', params: { item }})
        this.pushRoute('Arcticle')
        this.shiftRoute()
        // 只能传一个参数
        this.changeCache({
          arr: this.feedio,
          name: 'headlines'
        })
      }, 300)
    },
    load (num) {
      this.img.push(num)
    },
    includes (num) {
      return this.img.includes(num)
    },
    ...mapActions([
      'pushRoute',
      'shiftRoute',
      'changeCache'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.active
  animation link .3s ease forwards
@keyframes link {
  0% {
    width 60%
    border-radius 0
  }
  20% {
    width 100%
    border-radius 1.066667rem /* 40/37.5 */
  }
  100%{
    width 100%
    border-radius 0
  }
}
.card
  border-bottom 1px solid #ccc
  padding .266667rem /* 10/37.5 */
  font-size 0
  position relative
  .mask
    width 60%
    height 100%
    position absolute
    background-color #333
    left 50%
    top 0
    transform translateX(-50%)
    opacity .2
  .text
    font-size .426667rem /* 16/37.5 */
    line-height 1.5
    margin-bottom .266667rem /* 10/37.5 */
    color black
  .read
    color #aaa
  img
    display inline-block
    width 33%
    height 1.866667rem /* 70/37.5 */
    margin .133333rem /* 5/37.5 */ 0
    margin-right .5%
    margin-bottom .4rem /* 15/37.5 */
  .img
    display inline-block
    width 33%
    height 1.866667rem /* 70/37.5 */
    margin .133333rem /* 5/37.5 */ 0
    margin-right .5%
    margin-bottom .4rem /* 15/37.5 */
    background-color #ccc
  #imgLast
    margin-right 0
  span
    color #aaa
    font-size .32rem /* 12/37.5 */
  .src
    margin-right .266667rem /* 10/37.5 */
</style>
