<template>
  <div id="app">
    <Navbar />
    <transition name="fader">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/nav/Navbar'),
  },
}
</script>

<style lang="scss" scoped>
.fader-enter-active, .fader-leave-active {
  transition: .3s;
}

.fader-enter, .fader-leave-to {
  filter: blur(10px);
  opacity: 0;
}
</style>
