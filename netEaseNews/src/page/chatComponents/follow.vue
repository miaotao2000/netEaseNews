<template>
  <div>
    <my-follow/>
    <interest/>
  </div>
</template>

<script>
import myfollow from '@/page/chatComponents/myFollow'
import interest from '@/page/chatComponents/interest'
export default {
  components: {
    'my-follow': myfollow,
    'interest': interest
  }
}
</script>

<style>

</style>
