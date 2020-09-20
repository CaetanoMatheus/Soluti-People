<template>
  <div class="edit">
    <UserForm class="userData" />
  </div>
</template>

<script>
export default {
  components: {
    UserForm: () => import('@/components/form/UserForm'),
  },

  created() {
    this.$store.dispatch('user/one', this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
.userData {
  max-width: 700px;
  margin: -100px auto 0;
}
</style>
