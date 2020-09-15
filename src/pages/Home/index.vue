<template>
  <div class="helloWold">
    <Title title="Hello World!!" subText="It's time to code." />
  </div>
</template>

<script>
export default {
  components: {
    Title: () => import('@/components/text/Title'),
  },
}
</script>

<style lang="scss" scoped>
.helloWold {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $green;
}
</style>
