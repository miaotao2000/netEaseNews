<template>
  <div class="top">
    <n-header />
  <div class="container">
    <div class="left-scroll" ref="scroll">
      <div class="item" v-for="(item,index) of list" :key="index" :class="active == index? 'i-active':''"
      @click="toChangeActive(index)" :data-index='index'>{{item.name}}</div>
    </div>
    <div class="right-icon" @click="toColumn">
      <img src="../../assets/navbar/diary.svg" alt="">
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import header from '@/page/homeComponents/Header'
export default {
  props: ['active', 'list'],
  components: {
    'n-header': header
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'changeActive'
    ]),
    toColumn () {
      this.$emit('toColumn')
    },
    toChangeActive (index) {
      this.$router.push(this.list[index].component)
      this.changeActive(index)
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      // 向右滑动事件导航跟踪处理
      if (newVal % 2 === 0 && newVal - oldVal === 1) {
        let interval = setInterval(() => {
          this.$refs['scroll'].scrollLeft += this.$refs['scroll'].offsetWidth * 0.2 / 10
          setTimeout(() => {
            clearInterval(interval)
          }, 100)
        }, 10)
        return
      }
      // 向右滑动事件导航跟踪处理
      if (newVal % 2 === 0 && newVal - oldVal === -1) {
        let interval = setInterval(() => {
          this.$refs['scroll'].scrollLeft -= this.$refs['scroll'].offsetWidth * 0.2 / 10
          setTimeout(() => {
            clearInterval(interval)
          }, 100)
        }, 10)
        return
      }
      // 点击事件处理
      if (Math.abs(newVal - oldVal) !== 1) {
        let interval = setInterval(() => {
          this.$refs['scroll'].scrollLeft += this.$refs['scroll'].offsetWidth * 0.2 * (newVal - oldVal) / 10
          setTimeout(() => {
            clearInterval(interval)
          }, 100)
        }, 10)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.top
  position fixed
  top 0
  width 100%
  background-color #fff
  z-index 100
.i-active
  font-weight bold
  position relative
  &::after
    content ''
    position absolute
    border 1.5px solid red
    width .106667rem /* 4/37.5 */
    height .106667rem /* 4/37.5 */
    border-radius 50%
    top .133333rem /* 5/37.5 */
    right .266667rem /* 10/37.5 */
.container
  display flex
  height .8rem
  overflow hidden
  .left-scroll
    flex 9
    height 1rem /* 30/37.5 */
    overflow-x  scroll
    overflow-y hidden
    white-space nowrap
    transition all 1s
    &::-webkit-scrollbar
      display none
    .item
      width 20% /* 84.38/37.5 */
      text-align center
      font-size .373333rem /* 14/37.5 */
      line-height .8rem
      display inline-block
      transition all .2s
  .right-icon
    flex 1
    position relative
    img
      width 50%
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
</style>
