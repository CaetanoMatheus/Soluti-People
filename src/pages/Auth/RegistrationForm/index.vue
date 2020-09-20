<template>
  <form class="form" @submit.prevent="register">
    <h4 class="form__message">
      <InputError :message="errors.message" v-if="errors.message" />
    </h4>

    <Input
      class="form__input"
      label="Nome"
      icon="user"
      placeholder="Insira o seu nome"
      v-model="form.name"
    />
    <InputError :message="errors.name[0]" v-if="errors.name" />

    <InputWrapper class="form__input" label="CPF" icon="files-landscapes-alt">
      <TheMask
        class="input"
        placeholder="Insira o seu CPF"
        :mask="['###.###.###-##']"
        v-model="form.cpf"
      />
    </InputWrapper>
    <InputError :message="errors.cpf[0]" v-if="errors.cpf" />

    <Input
      class="form__input"
      label="Data de nascimento"
      icon="calendar-alt"
      type="date"
      placeholder="Insira a sua data de nascimento"
      v-model="form.date_of_birth"
    />
    <InputError
      :message="errors.date_of_birth[0]"
      v-if="errors.date_of_birth"
    />

    <Input
      class="form__input"
      label="E-mail"
      icon="envelope"
      placeholder="Insira o seu e-mail"
      v-model="form.email"
    />
    <InputError :message="errors.email[0]" v-if="errors.email" />

    <Input
      class="form__input"
      label="Senha"
      icon="lock"
      type="password"
      placeholder="Insira a sua senha"
      v-model="form.password"
    />
    <InputError :message="errors.password[0]" v-if="errors.password" />

    <Input
      class="form__input"
      label="Repetir Senha"
      icon="lock"
      type="password"
      placeholder="Insira a sua senha"
      v-model="form.password_confirmation"
    />

    <DoubleBounce class="form__button" v-if="isLoading" />
    <Button class="form__button" text="Cadastrar-se" v-else />
  </form>
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
    InputError: () => import('@/components/text/InputError'),
    Button: () => import('@/components/button/Button'),
  },

  props: {
    errors: {
      type: Object,
      required: true,
    },
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
      isLoading: 'getIsLoading',
    }),
  },

  methods: {
    async register() {
      const result = await this.$store.dispatch('auth/register', this.form)
      if (result) {
        window.Swal.toast().fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso',
        })
        this.$router.push({
          name: 'Login',
          params: { email: this.form.email },
        })
      }
    },
  },

  created() {
    this.$store.commit('resetErrors')
  },
}
</script>
