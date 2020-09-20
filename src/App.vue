<template>
  <div id="app">
    <header class="header" v-if="isAuthenticated">
      <Navbar class="header_navbar" />
      <Title title="Editar usuário" subText="Não se esqueça de salvar as alterações." />
    </header>
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
    Title: () => import('@/components/text/Title'),
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/getIsAuthenticated',
    }),
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  max-width: 1300px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  background: $green;
}

.fader-enter-active,
.fader-leave-active {
  transition: 0.3s;
}

.fader-enter,
.fader-leave-to {
  filter: blur(10px);
  opacity: 0;
}
</style>
