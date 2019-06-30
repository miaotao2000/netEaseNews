<template>
  <div class="my-con" v-if="$store.state.login">
    <div class="img-con">
      <img src="../../assets/video/avatar.svg" alt="">
    </div>
    <div class="info">
      <div class="nickName">{{$store.state.user.nickName}}</div>
      <div class="desc">跟帖局科员</div>
    </div>
    <div class="icon">
      <img src="../../assets/func/right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.my-con
  padding .4rem /* 15/37.5 */.266667rem /* 10/37.5 */
  background-color #fff
  display flex
  align-items center
  .img-con
    flex 3
    padding 0 .266667rem /* 10/37.5 */
    img
      width 1.6rem /* 60/37.5 */
      height 1.6rem /* 60/37.5 */
      margin-left .533333rem /* 20/37.5 */
  .info
    flex 7
    .nickName
      font-size .48rem /* 18/37.5 */
      margin-left -.213333rem /* 8/37.5 */
    .desc
      margin-top .266667rem /* 10/37.5 */
      margin-left -.213333rem /* 8/37.5 */
      color #666
  .icon
    flex 1
    img
      width .533333rem /* 20/37.5 */
      height .533333rem /* 20/37.5 */
</style>
