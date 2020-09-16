<template>
  <nav class="navbar">
    <router-link class="logo" :to="{ name: 'Home' }">
      <h1>Soluti People</h1>
    </router-link>
    <UserDropdown />
  </nav>
</template>

<script>
export default {
  components: {
    UserDropdown: () => import('@/components/dropdown/UserDropdown'),
  },

  created() {
    this.$store.dispatch('auth/authenticatedUser')
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  text-decoration: none;
}
</style>
