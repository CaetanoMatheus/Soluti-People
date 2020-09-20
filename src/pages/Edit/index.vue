<template>
  <div class="edit" id="editPage">
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
    this.$store.commit('setHeaderData', {
      title: 'Editar usuário',
      subText: 'Não se esqueça de salvar as alterações',
    })
  },
}
</script>

<style lang="scss" scoped>
.edit {
  padding-bottom: 100px;
}

.userData {
  max-width: 700px;
  margin: -100px auto 0;
}
</style>
