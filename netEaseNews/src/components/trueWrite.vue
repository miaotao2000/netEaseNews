<template>
  <div class="ture-container" v-if="trueWrite">
    <div class="textarea">
      <textarea name="" id="" rows="4" v-focus></textarea>
    </div>
    <div class="btn-con">
      <div class="btn">
        发送
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trueWrite'],
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.ture-container
  background-color #fff
  padding .266667rem /* 10/37.5 */
  position fixed
  display flex
  bottom 0
  width 100%
  .textarea
    flex 8
    textarea
      width 90%
      border none
      background-color #e6e6e6
      border-radius .266667rem /* 10/37.5 */
      padding .266667rem /* 10/37.5 */
  .btn-con
    flex 2
    position relative
    .btn
      position absolute
      bottom .266667rem /* 10/37.5 */
      background-color #aaaaaa
      color #ffffff
      padding .133333rem /* 5/37.5 */.4rem /* 15/37.5 */
      border-radius .4rem /* 15/37.5 */
</style>
