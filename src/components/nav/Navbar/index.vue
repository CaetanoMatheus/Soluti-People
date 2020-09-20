<template>
  <nav class="navbar">
    <router-link class="left" :to="{ name: 'Home' }">
      <h1 class="left__text" v-if="isHome">Soluti People</h1>
      <img
        class="left__arrow"
        src="@/assets/svg/left-arrow.svg"
        alt="Arrow Left"
        v-else
      />
    </router-link>
    <UserDropdown />
  </nav>
</template>

<script>
export default {
  components: {
    UserDropdown: () => import('@/components/dropdown/UserDropdown'),
  },

  computed: {
    isHome() {
      return this.$route.name === 'Home'
    },
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

.left {
  text-decoration: none;

  &__text {
    color: $white;
  }

  .left__arrow {
    width: 50px;
    height: 40px;
    transition: .5s;

    &:hover {
      width: 65px;
      padding: 0 15px;
      border-radius: 20px;
      background: darken($green, 5);
    }
  }
}
</style>
