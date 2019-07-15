<template>
  <div id="imgcon" v-if="show">
    <div class="close">
      <img src="../assets/img/close.svg" alt="" @click="close">
    </div>
    <van-swipe @change="onChange" :show-indicators='false' :initial-swipe='+images.index'>
      <van-swipe-item v-for="(image, index) in images.imgs" :key="index">
        <img :src='image' />
      </van-swipe-item>
    </van-swipe>
    <div class="count" slot="indicator">
        {{ (current != null ? current : +images.index) + 1 }}/{{images.imgs.length}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['show', 'images'],
  data () {
    return {
      current: null
    }
  },
  methods: {
    ...mapActions([
      'viewImg'
    ]),
    onChange (index) {
      this.current = index
    },
    close () {
      this.viewImg()
      this.current = null
    }
  }
}
</script>

<style lang="stylus" scoped>
#imgcon
  position absolute
  z-index 1000
  background-color black
  top 0
  width 100%
  height 100%
  img
    width 100%
  .van-swipe
    position absolute
    top 50%
    width 100%
    transform translateY(-50%)
  .count
    color #fff
    position absolute
    bottom .266667rem /* 10/37.5 */
    font-size .426667rem /* 16/37.5 */
    left .266667rem /* 10/37.5 */
  .close
    img
      width .746667rem /* 28/37.5 */
      margin-top .133333rem /* 5/37.5 */
      margin-left .133333rem /* 5/37.5 */
</style>
