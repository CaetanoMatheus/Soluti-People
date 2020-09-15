<template>
  <div id="app">
    <transition name="fader">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fader-enter-active, .fader-leave-active {
  transition: .3s;
}

.fader-enter, .fader-leave-to {
  filter: blur(10px);
  opacity: 0;
}
</style>
