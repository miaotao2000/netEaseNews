<template>
  <div id="app">
    {{status}}
     <router-view />
     <div class="mg-bt">
     </div>
     <tabbar :active='$store.state.active'/>
  </div>
</template>

<script>
import tabbar from '@/page/homeComponents/Tabbar'
export default {
  name: 'App',
  data () {
    return {
      status: this.$status,
      loading: true
    }
  },
  components: {
    'tabbar': tabbar
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
