<template>
  <div id="app">
    <Navbar v-if="isAuthenticated"/>
    <transition name="fader">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Navbar: () => import('@/components/nav/Navbar'),
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/getIsAuthenticated',
    }),
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
