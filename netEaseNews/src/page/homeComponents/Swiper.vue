<template>
  <div class="swiper-container" ref="s-con">
    <div class="swiper-wrapper" ref="swiper">
        <div class="swiper-slide relative" v-for="(item,index) of contentArr" :key='index' :data-index='index'>
          <div class="router" v-if="index==active">
            <router-view />
          </div>
          <div class="loading" v-else>正在加载</div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper'
import { mapActions } from 'vuex'
export default {
  props: ['active', 'contentArr', 'totalnews'],
  data () {
    return {
      myswiper: null,
      test: true
    }
  },
  mounted () {
    const that = this
    this.myswiper = new Swiper('.swiper-container',
      {
        // touchRatio: 0.8,
        watchSlidesProgress: true,
        observer: true,
        on: {
          slideChangeTransitionEnd: function () {
            that.changeActive(this.activeIndex)
            that.$router.push(that.contentArr[this.activeIndex].component)
          }
        }
      })
    const sWidth = this.$refs['s-con'].offsetWidth
    this.myswiper.setTranslate(-sWidth * this.active)
  },
  methods: {
    ...mapActions([
      'changeActive'
    ])
  },
  watch: {
    active: function (newVal) {
      const sWidth = this.$refs['s-con'].offsetWidth
      this.myswiper.setTranslate(-sWidth * newVal)
    }
  }
}
</script>

<style lang="stylus" scoped>
.relative
  position relative
.swiper-container
  width 100%
  .loading
    position absolute
    top 5.333333rem /* 200/37.5 */
    left 50%
    transform translate(-50%,-50%)
    font-size .533333rem /* 20/37.5 */
    font-weight bold
</style>
