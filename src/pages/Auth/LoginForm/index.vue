<template>
  <form class="form" @submit.prevent="login">
    <div class="form__input">
      <Input
        label="E-mail"
        icon="envelope"
        placeholder="Insira o seu e-mail"
        v-model="form.email"
      />
      <div v-if="$v.form.email.$error">
        <InputError
          message="Por favor, informe o e-mail."
          v-if="!$v.form.email.required"
        />
        <InputError
          message="O e-mail precisa ser um endereço válido."
          v-if="!$v.form.email.email"
        />
      </div>
    </div>

    <div class="form__input">
      <Input
        label="Senha"
        icon="lock"
        placeholder="Insira a sua senha"
        v-model="form.password"
      />
      <InputError
        message="Por favor, informe a senha."
        v-if="$v.form.password.$error && !$v.form.password.required"
      />
    </div>

    <Button class="form__button" text="Acessar" />
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

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

  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },

  methods: {
    login() {
      if (this.$v.form.$invalid) this.$v.$touch()
      else {
        alert('Alert')
      }
    },
  },
}
</script>
