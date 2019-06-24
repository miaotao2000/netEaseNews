<template>
  <div class="container">
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
      'Chat': 2,
      'Mine': 3
    }[this.$route.name]
  },
  methods: {
    toHome () {
      this.$router.push('/')
      this.active = 0
    },
    toVideo () {
      this.$router.push('Video')
      this.active = 1
    },
    toChat () {
      this.$router.push('Chat')
      this.active = 2
    },
    toMine () {
      this.$router.push('Mine')
      this.active = 3
    }
    // ,
    // ...mapActions([
    //   'resetActive'
    // ])
  }
}
</script>

<style lang="stylus" scoped>
.active
  color red
.container
  z-index 1
  position fixed
  bottom 0
  width 100%
  display flex
  background-color #fff
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
