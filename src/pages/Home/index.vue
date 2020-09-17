<template>
  <div class="home">
    <Title title="Lista de Usuários" />
    <FiltersInput class="filter" />
    <UsersTable class="table" :users="users.data" v-if="users.data" />
    <Pagination class="pagination" v-if="users.data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Title: () => import('@/components/text/Title'),
    FiltersInput: () => import('@/components/input/FiltersInput'),
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
  min-height: 100vh;
  padding: 30px;
  background: $green;
}

.filter {
  align-self: flex-start;
  margin: 10px 0;
}

.table {
  margin: 20px 0;
}

.pagination {
  align-self: flex-start;
}
</style>
