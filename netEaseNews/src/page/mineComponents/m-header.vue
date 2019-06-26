<template>
  <div class="container">
    <div class="model">
      <div class="left btn">
        <img src="../../assets/m-header/moon.svg" alt="">
        <span>{{model}}</span>
      </div>
    </div>
    <div class="sign">
      <div class="right btn">
      <img src="../../assets/m-header/money.svg" alt="">
      <span>{{signed}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: '夜间',
      signed: '签到'
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn
  display flex
  border 1px solid #ddd
  width 1.893333rem /* 71/37.5 */
  align-items center
  padding .133333rem .106667rem /* 4/37.5 */
  border-radius .4rem /* 15/37.5 */
  margin-top .133333rem /* 5/37.5 */
  img
    width .346667rem /* 13/37.5 */
    margin 0 .213333rem /* 8/37.5 */
  span
    display inline-block
    margin-right .133333rem /* 5/37.5 */
    font-size .373333rem /* 14/37.5 */
.container
  display flex
  align-items center
  padding .266667rem /* 10/37.5 */
  background-color #ffffff
  .model
    flex 8
  .sign
    flex 2
    .right img
      width .4rem /* 15/37.5 */
</style>
