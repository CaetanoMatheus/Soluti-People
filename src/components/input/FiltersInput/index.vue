<template>
  <form class="filtersInput" @submit.prevent="filter">
    <select class="select" v-model="filterType">
      <option class="select__option" value="" hidden>Selecione</option>
      <option class="select__option" value="all">Todos</option>
      <option class="select__option" value="cpf">CPF</option>
      <option class="select__option" value="email">E-mail</option>
      <option class="select__option" value="city">Cidade</option>
    </select>
    <InputWrapper class="form__input" v-if="filterType === 'cpf'">
      <TheMask
        class="input"
        :placeholder="inputPlaceholder"
        v-model="filterValue"
        :mask="['###.###.###-##']"
      />
    </InputWrapper>
    <Input :placeholder="inputPlaceholder" v-model="filterValue" v-else />
    <Button class="filterButton" text="Filtrar" />
  </form>
</template>

<script>
import { TheMask } from 'vue-the-mask'

export default {
  components: {
    TheMask,
    InputWrapper: () => import('@/components/wrapper/InputWrapper'),
    Input: () => import('@/components/input/Input'),
    Button: () => import('@/components/button/Button'),
  },

  data: () => ({
    inputPlaceholder: 'Insira o valor que deseja filtrar',
    filterType: '',
    filterValue: '',
  }),

  methods: {
    filter() {
      if (this.filterType === 'all') this.$store.dispatch('user/all')
      else {
        this.$store.dispatch('user/all', {
          filterType: this.filterType,
          filterValue: this.filterValue,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.filtersInput {
  display: flex;
}

.select {
  cursor: pointer;
  margin-right: 5px;
  padding: 0 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: $white;
}

.filterButton {
  margin-left: 5px;
  box-shadow: 1px 1px 2px $default-text;
}
</style>
