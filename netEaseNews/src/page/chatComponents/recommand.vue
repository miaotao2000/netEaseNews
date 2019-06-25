<template>
  <div>
    <hot-theme/>
    <saying/>
  </div>
</template>

<script>
import theme from '@/page/chatComponents/hot-theme'
import saying from '@/page/chatComponents/saying'
export default {
  components: {
    'hot-theme': theme,
    'saying': saying
  }
}
</script>

<style>

</style>
