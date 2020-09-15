<template>
  <form class="form">
    <Input
      class="form__input"
      label="E-mail"
      icon="envelope"
      placeholder="Insira o seu e-mail"
      v-model="form.email"
    />
    {{ form.email }}
    <Input
      class="form__input"
      label="Senha"
      icon="lock"
      placeholder="Insira a sua senha"
      v-model="form.password"
    />
    {{ form.password }}
    <Button class="form__button" text="Acessar" />
  </form>
</template>

<script>
export default {
  components: {
    Input: () => import('@/components/input/Input'),
    Button: () => import('@/components/button/Button'),
  },

  data: () => ({
    form: {
      email: 'asd',
      password: '123',
    },
  }),
}
</script>
