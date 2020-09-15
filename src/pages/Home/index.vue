<template>
  <div class="container">
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $green;
}
</style>
