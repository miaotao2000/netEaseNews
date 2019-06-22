<template>
  <div id="app">
    {{status}}
     <router-view />
     <tabbar :active='$store.state.active'/>
  </div>
</template>

<script>
import tabbar from '@/page/homeComponents/Tabbar'
export default {
  name: 'App',
  data () {
    return {
      status: this.$status
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
  height 100vh
</style>
