<template>
  <div class="page">
    <c-header/>
    <hot-theme/>
    <saying/>
  </div>
</template>

<script>
import header from '@/page/chatComponents/c-header'
import theme from '@/page/chatComponents/hot-theme'
import saying from '@/page/chatComponents/saying'
export default {
  components: {
    'c-header': header,
    'hot-theme': theme,
    'saying': saying
  }
}
</script>

<style lang="stylus" scoped>
.page
  background-color #e6e6e6
</style>
