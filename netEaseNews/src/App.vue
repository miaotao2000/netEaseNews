<template>
  <div id="app">
    {{status}}
  <div v-show="!$store.state.openLogin">
     <router-view />
  </div>
     <div class="mg-bt" v-if="$store.state.needTabbar">
     </div>
     <tabbar :active='$store.state.active'/>
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
</style>
