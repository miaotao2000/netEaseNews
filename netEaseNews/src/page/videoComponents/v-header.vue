<template>
  <div class="header">
    <div class="nav-con">
      <div class="nav">推荐</div>
    </div>
    <div class="icon">
      <img src="../../assets/v-header/search.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
  height 1.066667rem /* 40/37.5 */
  display flex
  align-items center
  .nav-con
    flex 9
    .nav
      width 1.333333rem /* 50/37.5 */
      line-height 1.066667rem /* 40/37.5 */
      font-size .373333rem /* 14/37.5 */
      font-weight bold
      text-align center
  .icon
    flex 1
    img
      width 60%
</style>
