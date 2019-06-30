<template>
  <div class="write-container" v-if="!trueWrite">
    <input type="text" placeholder="写跟帖" @click="write">
    <div class="message">
      <img src="../assets/grid/comment.svg" alt="">
      <div class="flonumber">
        <div class="text">{{flonumber}}</div>
      </div>
    </div>
    <div class="follow">
      <img src="../assets/grid/collection.svg" alt="">
    </div>
    <div class="share">
      <img src="../assets/grid/share.svg" alt="">
    </div>
    <div class="more">
      <img src="../assets/grid/more.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['trueWrite', 'flonumber'],
  methods: {
    write () {
      this.$emit('write')
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.write-container
  box-sizing border-box
  display flex
  position fixed
  width 100%
  bottom 0
  left 0
  align-items center
  padding .266667rem /* 10/37.5 */.4rem /* 15/37.5 */
  background-color #fff
  img
    width .533333rem /* 20/37.5 */
    height .533333rem /* 20/37.5 */
    display block
    margin 0 auto
  input
    flex 4
    border none
    height .533333rem /* 20/37.5 */
    background-color #e6e6e6
    padding .08rem /* 3/37.5 */
    border-radius .4rem /* 15/37.5 */
    padding-left .266667rem /* 10/37.5 */
  .message
    flex 1.3
    position relative
    img
      margin-top .053333rem /* 2/37.5 */
    .flonumber
      position absolute
      background-color #E54D42
      height .32rem /* 12/37.5 */
      color white
      border-radius .4rem /* 15/37.5 */
      top 0
      right 0
      .text
        text-align center
        font-size .266667rem /* 10/37.5 */
        transform scale(.7)
        line-height .32rem /* 12/37.5 */
  .follow
    flex 1.3
  .share
    flex 1.3
    img
      margin-top .133333rem /* 5/37.5 */
  .more
    flex 1.3
</style>
