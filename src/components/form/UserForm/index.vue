<template>
  <div class="userForm">
    <form class="form">
      <Input
        class="form__input"
        label="Nome"
        icon="user"
        placeholder="Insira o seu nome"
        v-model="user.name"
      />

      <InputWrapper class="form__input" label="CPF" icon="files-landscapes-alt">
        <TheMask
          class="input"
          placeholder="Insira o seu CPF"
          :mask="['###.###.###-##']"
          v-model="user.cpf"
        />
      </InputWrapper>

      <Input
        class="form__input"
        label="Data de nascimento"
        icon="calendar-alt"
        type="date"
        placeholder="Insira a sua dsata de nascimento"
        v-model="user.date_of_birth"
      />

      <Input
        class="form__input"
        label="E-mail"
        icon="envelope"
        placeholder="Insira o seu e-mail"
        v-model="user.email"
      />

      <Input
        class="form__input"
        label="Senha"
        icon="lock"
        type="password"
        placeholder="Insira a sua senha"
        v-model="user.password"
      />

      <Input
        class="form__input"
        label="Repetir Senha"
        icon="lock"
        type="password"
        placeholder="Insira a sua senha"
        v-model="user.password_confirmation"
      />
      <DoubleBounce class="form__button" v-if="isLoading" />
      <Button class="form__button" text="Cadastrar-se" v-else />
    </form>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { DoubleBounce } from 'vue-loading-spinner'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheMask,
    DoubleBounce,
    Input: () => import('@/components/input/Input'),
    InputWrapper: () => import('@/components/wrapper/InputWrapper'),
    Button: () => import('@/components/button/Button'),
  },

  data: () => ({
    form: {
      name: '',
      cpf: '',
      date_of_birth: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  }),

  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isLoading: 'getIsLoading',
    }),
  },
}
</script>

<style lang="scss" scoped>
.userForm {
  padding: 30px;
  border-radius: 5px;
  background: $white;
  box-shadow: 1px 1px 5px $default-text;
}

.form {
  &__input, &__button {
    margin-top: 15px;
  }
}
</style>
