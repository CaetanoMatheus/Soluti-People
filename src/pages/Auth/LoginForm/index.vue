<template>
  <form class="form" @submit.prevent="login">
    <h4 class="form__message">
      <InputError :message="errors.message" v-if="errors.message" />
    </h4>

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
      email: '',
      password: '',
    },
  }),

  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.form)
      if (Object.keys(this.errors).length === 0) {
        this.$router.push({ name: 'Home' })
      }
    },
  },

  created() {
    if (this.$route.params.email) {
      this.form.email = this.$route.params.email
    }
    this.$store.commit('auth/resetErrors')
  },
}
</script>
