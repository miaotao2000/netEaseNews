<template>
  <div id="app">
    {{status}}
  <div v-show="!$store.state.global.openLogin">
     <router-view />
  </div>
     <div class="mg-bt" v-if="$store.state.global.needTabbar">
     </div>
     <tabbar :active='$store.state.global.active'/>
     <login />
  </div>
</template>

<script>
import tabbar from '@/page/homeComponents/Tabbar'
import login from '@/components/login'
export default {
  name: 'App',
  data () {
    return {
      status: this.$status,
      loading: true
    }
  },
  components: {
    'tabbar': tabbar,
    'login': login
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
.page
  width 100%
.mg-bt
  margin-bottom 1.36rem /* 51/37.5 */
.vue-message
  width 100%
  height 1.066667rem /* 40/37.5 */
  position absolute
  animation showMessage .2s linear forwards
  z-index 1001
  padding .266667rem /* 10/37.5 */
  box-sizing border-box
  text-align center
  font-size .373333rem /* 14/37.5 */
.message-success
  background-color #F0F9EB
  color #74C23A
.message-error
  background-color #FEF0F0
  color #F66C96
@keyframes showMessage {
  0% {
    top -.533333rem /* 20/37.5 */
  }
  100%{
    top 0rem /* 0/37.5 */
  }
}
</style>
