<template>
  <form class="form">
    <Input
      class="form__input"
      label="E-mail"
      icon="envelope"
      placeholder="Insira o seu e-mail"
    />
    <Input
      class="form__input"
      label="Senha"
      icon="lock"
      placeholder="Insira a sua senha"
    />
    <Button class="form__button" text="Acessar" />
  </form>
</template>

<script>
export default {
  components: {
    Input: () => import('@/components/input/Input'),
    Button: () => import('@/components/button/Button'),
  },
}
</script>
