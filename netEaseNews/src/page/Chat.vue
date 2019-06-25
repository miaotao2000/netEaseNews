<template>
  <div class="page">
    <c-header/>
    <router-view/>
  </div>
</template>

<script>
import header from '@/page/chatComponents/c-header'
export default {
  components: {
    'c-header': header
  }
}
</script>

<style lang="stylus" scoped>
.page
  background-color #e6e6e6
</style>
