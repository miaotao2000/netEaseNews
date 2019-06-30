<template>
  <div class="container" v-if="!$store.state.login">
  <div class="circle-con">
    <div class="circle">
      <img src="../../assets/m-header/phone.svg" alt="">
    </div>
    <div class="circle">
      <img src="../../assets/m-header/qq.svg" alt="">
    </div>
    <div class="circle">
      <img src="../../assets/m-header/wechat.svg" alt="">
    </div>
    <div class="circle" id="last">
      <img src="../../assets/m-header/sina.svg" alt="">
    </div>
  </div>
  <div class="login-btn" @click="login">
    登录/注册
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color #ffffff
#last
  margin-right 0
.circle-con
  padding .4rem /* 15/37.5 */1.066667rem /* 40/37.5 */
  .circle
    display inline-block
    margin-right .8rem /* 30/37.5 */
    width 1.226667rem /* 46/37.5 */
    height 1.2rem /* 45/37.5 */
    border 1px solid #ddd
    border-radius 50%
    position relative
    img
      position absolute
      width .666667rem /* 25/37.5 */
      top 50%
      left 50%
      transform translate(-50%,-50%)
.login-btn
  margin-top .266667rem /* 10/37.5 */
  width 2.933333rem /* 110/37.5 */
  height .8rem /* 30/37.5 */
  background-color #E54D42
  margin 0 auto
  color white
  text-align center
  line-height .8rem /* 30/37.5 */
  border-radius .4rem /* 15/37.5 */
</style>
