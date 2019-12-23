<template>
  <div class="about">
    <PageTwo msg="This is an about page" @add-feature="onAddFeature" />
  </div>
</template>
<script lang='ts'>
import PageTwo, { Feature } from '@/components/PageTwo.vue'

export default {
  name: 'about',
  components: {
    PageTwo
  },
  methods: {
    onAddFeature(feature: Feature) {
      console.log(feature)
    }
  }
}
</script>
