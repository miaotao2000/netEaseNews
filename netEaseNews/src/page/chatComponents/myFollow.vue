<template>
  <div class="container">
    <div class="myfollow">
      <div class="tip">
        登录查看我关注的圈子
      </div>
      <div class="btn-con">
        <div class="btn">登录</div>
      </div>
      <div class="img">
        <img src="../../assets/myfollow/close.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.container
  padding .266667rem /* 10/37.5 */
  background-color  white
  .myfollow
    background-color #CCE6FF
    color #0081FF
    display flex
    align-items center
    padding .266667rem /* 10/37.5 */.133333rem /* 5/37.5 */
    border-radius .533333rem /* 20/37.5 */
    .tip
      flex 8
      padding-left .266667rem /* 10/37.5 */
    .btn-con
      flex 2
      .btn
        border 1px solid rgba(0,142,255,.3)
        text-align center
        padding .053333rem 0
        width 1.333333rem /* 50/37.5 */
        border-radius .266667rem /* 10/37.5 */
    .img
      flex 1
      img
        margin-top .053333rem /* 2/37.5 */
        width .4rem /* 15/37.5 */
</style>
