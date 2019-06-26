<template>
  <div class="container">
    <div class="list" v-for="(item,index) of list" :key="index">
      <div class="name">{{item.name}}</div>
      <div class="intro">{{item.intro}}</div>
      <img src="../../assets/func/right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="stylus" scoped>
.container
  background-color #fff
  margin-top .133333rem /* 5/37.5 */
  .list
    display flex
    padding .533333rem /* 20/37.5 */.266667rem /* 10/37.5 */
    border-bottom 1px solid #ddd
    align-items center
    .name
      flex 6
      font-size .4rem /* 15/37.5 */
      margin-left .266667rem /* 10/37.5 */
    .intro
      flex 2.5
      text-align right
      color #666
    img
      flex 0.5
      width .4rem /* 15/37.5 */
      height .4rem /* 15/37.5 */
</style>
