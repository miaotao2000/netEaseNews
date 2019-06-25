<template>
  <div class="header">
    <div class="nav-con">
      <div class="empty"></div>
      <div class="nav tac-right" :class="ActiveLeft" @click="changeActive_left">
         推荐
      </div>
      <div class="nav tac-left"  :class="Active" @click="changeActive_right">
        关注
      </div>
      <div class="empty"></div>
    </div>
    <div class="icon">
      <img src="../../assets/v-header/search.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    changeActive_left () {
      this.active = 0
      this.$router.push('/Chat/recommand')
    },
    changeActive_right () {
      this.active = 1
      this.$router.push('/Chat/follow')
    }
  },
  computed: {
    Active () {
      return this.active ? 'active' : ''
    },
    ActiveLeft () {
      return this.active ? '' : 'active'
    }
  }
}
</script>

<style lang="stylus" scoped>
.active
  font-weight bold
.header
  height 1.066667rem /* 40/37.5 */
  display flex
  align-items center
  background-color white
  .nav-con
    flex 9
    display flex
    .nav
      width 1.333333rem /* 50/37.5 */
      line-height 1.066667rem /* 40/37.5 */
      font-size .373333rem /* 14/37.5 */
    .empty
      flex 2
    .tac-left
      text-align left
      margin-left .266667rem /* 10/37.5 */
      flex 1
    .tac-right
      text-align right
      margin-right .266667rem /* 10/37.5 */
      flex 1.5
  .icon
    flex 1
    img
      width 60%
</style>
