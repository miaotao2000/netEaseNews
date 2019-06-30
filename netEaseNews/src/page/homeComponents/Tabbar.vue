<template>
  <div class="container" v-if="$store.state.needTabbar">
    <div class="col">
      <div class="target" @click="toHome">
        <div class="icon">
          <img src="../../assets/tabbar/home-active.svg" alt="" v-if="active==0"/>
          <img src="../../assets/tabbar/home.svg" alt="" v-else/>
        </div>
        <div class="text" :class="active==0?'active':''">首页</div>
      </div>
    </div>
    <div class="col">
      <div class="target" @click="toVideo">
        <div class="icon">
          <img src="../../assets/tabbar/video-active.svg" alt="" v-if="active==1"/>
          <img src="../../assets/tabbar/video.svg" alt="" v-else/>
        </div>
        <div class="text" :class="active==1?'active':''">视频</div>
      </div>
    </div>
    <div class="col">
      <div class="target" @click="toChat">
        <div class="icon">
          <img src="../../assets/tabbar/chat-active.svg" alt="" v-if="active==2"/>
          <img src="../../assets/tabbar/chat.svg" alt="" v-else/>
        </div>
        <div class="text" :class="active==2?'active':''">讲讲</div>
      </div>
    </div>
    <div class="col">
      <div class="target" @click="toMine">
        <div class="icon">
          <img src="../../assets/tabbar/user-active.svg" alt="" v-if="active==3"/>
          <img src="../../assets/tabbar/user.svg" alt="" v-else/>
        </div>
        <div class="text" :class="active==3?'active':''">我</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    this.active = {
      'Headlines': 0,
      'Video': 1,
      'Recommand': 2,
      'Mine': 3
    }[this.$route.name]
  },
  methods: {
    ...mapActions([
      'pushRoute',
      'shiftRoute'
    ]),
    toHome () {
      if (this.active === 0) {
        return
      }
      this.$router.push('/')
      this.active = 0
    },
    toVideo () {
      this.$router.push({name: 'Video'})
      this.pushRoute('Video')
      this.shiftRoute()
      this.active = 1
    },
    toChat () {
      this.$router.push({name: 'Recommand'})
      this.pushRoute('Recommand')
      this.shiftRoute()
      this.active = 2
    },
    toMine () {
      this.$router.push({name: 'Mine'})
      this.pushRoute('Mine')
      this.shiftRoute()
      this.active = 3
    }
  }
}
</script>

<style lang="stylus" scoped>
.active
  color red
.container
  position fixed
  bottom 0
  width 100%
  display flex
  background-color #fff
  z-index 1000
  .col
    flex  1
    text-align center
    .target
      display flex
      flex-direction column
      align-items center
      .icon
        width .533333rem /* 20/37.5 */
        height .533333rem /* 20/37.5 */
        margin .133333rem 0
        img
          width 100%
      .text
        margin-bottom .133333rem /* 5/37.5 */
</style>
