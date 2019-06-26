<template>
  <div class="container">
    <div class="follow col">
      <img src="../../assets/grid/comment.svg" alt="">
      <div class="content">跟帖</div>
    </div>
    <div class="collection col">
      <img src="../../assets/grid/collection.svg" alt="">
      <div class="content">收藏</div>
    </div>
    <div class="history col">
      <img src="../../assets/grid/history.svg" alt="">
      <div class="content">历史</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.container
  display flex
  padding .666667rem /* 25/37.5 */ .533333rem /* 20/37.5 */
  padding-bottom .8rem /* 30/37.5 */
  text-align center
  background-color #ffffff
  .col
    flex 1
    img
      width .533333rem /* 20/37.5 */
    .content
      margin-top .133333rem /* 5/37.5 */
      color #666
</style>
