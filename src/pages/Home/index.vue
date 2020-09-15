<template>
  <div class="home">
    <Title title="Lista de Usuários" />
    <UsersTable class="table" :users="users.data" v-if="users.data" />
    <Pagination class="pagination" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Title: () => import('@/components/text/Title'),
    UsersTable: () => import('@/components/table/UsersTable'),
    Pagination: () => import('@/components/pagination/Pagination'),
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

.table {
  margin: 20px 0;
}

.pagination {
  align-self: flex-start;
}
</style>
