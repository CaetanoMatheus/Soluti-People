<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="table__fieldItem">#</th>
        <th class="table__fieldItem">Nome</th>
        <th class="table__fieldItem">CPF</th>
        <th class="table__fieldItem">Nascimento</th>
        <th class="table__fieldItem">E-mail</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td class="table__infoItem">{{ user.id }}</td>
        <td class="table__infoItem">{{ user.name }}</td>
        <td class="table__infoItem">{{ user.cpf }}</td>
        <td class="table__infoItem">{{ user.date_of_birth }}</td>
        <td class="table__infoItem">{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  border-radius: 5px;
  background: $white;
  box-shadow: 1px 1px 5px $default-text;
  overflow: auto;

}

.table {
  width: 100%;
  text-align: left;
  white-space: nowrap;

  &__infoItem, &__fieldItem {
    padding: 5px 10px;
    color: $default-text;
  }

  &__infoItem {
      background: lighten($light-grey, 15);
  }
}
</style>
