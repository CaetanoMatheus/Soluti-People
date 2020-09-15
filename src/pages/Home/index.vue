<template>
  <div class="home">
    <Title title="Hello World!!" subText="It's time to code." />
    <UsersTable :users="users.data" v-if="users.data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Title: () => import('@/components/text/Title'),
    UsersTable: () => import('@/components/table/UsersTable'),
  },

  computed: {
    ...mapGetters({
      users: 'user/getUsers',
    }),
  },

  created() {
    this.$store.dispatch('user/all')
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 30px;
  background: $green;
}
</style>
