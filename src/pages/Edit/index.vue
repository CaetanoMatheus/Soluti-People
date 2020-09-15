<template>
  <div class="edit">
    <header class="header">
      <Title title="Editar usuário" subText="Não se esqueça de salvar as alterações." />
    </header>
    <UserForm class="userData" />
  </div>
</template>

<script>
export default {
  components: {
    Title: () => import('@/components/text/Title'),
    UserForm: () => import('@/components/form/UserForm'),
  },

  created() {
    this.$store.dispatch('user/one', this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
.edit {
  min-height: 100vh;
  background: #F0F0F7;
}

.header {
  display: flex;
  justify-content: center;
  height: 170px;
  padding: 20px;
  background: $green;

}

.userData {
  max-width: 700px;
  margin: -50px auto 0;
}
</style>
