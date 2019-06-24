<template>
  <div class="page">
    <c-header/>
    <hot-theme/>
  </div>
</template>

<script>
import header from '@/page/chatComponents/c-header'
import theme from '@/page/chatComponents/hot-theme'
export default {
  components: {
    'c-header': header,
    'hot-theme': theme
  }
}
</script>

<style>

</style>
