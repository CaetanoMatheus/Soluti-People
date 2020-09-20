<template>
  <div class="home">
    <FiltersInput class="filter" />
    <UsersTable class="table" :users="users.data" v-if="users.data" />
    <Pagination class="pagination" v-if="users.data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
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
  padding: 30px;
}

.filter {
  margin: -150px 0 10px;
}

.table {
  margin: 20px 0;
}

.pagination {
  align-self: flex-start;
}
</style>
