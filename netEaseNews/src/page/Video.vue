<template>
  <div class="page">
    <vheader/>
    <Video />
  </div>
</template>

<script>
import vheader from '@/page/videoComponents/v-header'
import Video from '@/page/videoComponents/video'
export default {
  components: {
    'vheader': vheader,
    'Video': Video
  }
}
</script>

<style>

</style>
