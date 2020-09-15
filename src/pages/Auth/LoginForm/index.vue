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
import { mapGetters } from 'vuex'

export default {
  components: {
    Input: () => import('@/components/input/Input'),
    InputError: () => import('@/components/text/InputError'),
    Button: () => import('@/components/button/Button'),
  },

  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),

  computed: {
    ...mapGetters({
      errors: 'auth/getErrors',
    }),
  },

  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.form)
      this.$router.push({ name: 'Home' })
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
