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

    <Input
      class="form__input"
      label="CPF"
      icon="files-landscapes-alt"
      placeholder="Insira o seu CPF"
      v-model="form.cpf"
    />
    <InputError :message="errors.cpf[0]" v-if="errors.cpf" />

    <Input
      class="form__input"
      label="Data de nascimento"
      icon="calendar-alt"
      type="date"
      placeholder="Insira a sua dsata de nascimento"
      v-model="form.date_of_birth"
    />
    <InputError :message="errors.date_of_birth[0]" v-if="errors.date_of_birth" />

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
    <InputError
      :message="errors.password_confirmation[0]"
      v-if="errors.password_confirmation"
    />

    <Button class="form__button" text="Acessar" />
  </form>
</template>

<script>
export default {
  components: {
    Input: () => import('@/components/input/Input'),
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
      email: '',
      password: '',
      password_confirmation: '',
    },
  }),

  methods: {
    async register() {
      await this.$store.dispatch('auth/register', this.form)
      if (Object.keys(this.errors).length === 0) {
        this.$router.push({ name: 'Login', params: { email: this.form.email } })
      }
    },
  },

  created() {
    this.$store.commit('auth/resetErrors')
  },
}
</script>
