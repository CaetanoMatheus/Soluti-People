<template>
  <div class="login">
    <img
      class="hero"
      src="@/assets/svg/authentication.svg"
      alt="Authentication"
    />
    <Title title="Entrar" subText="Entre no Soluti People" />
    <form class="form">
      <Input
        class="form__input"
        label="E-mail"
        icon="user"
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
  </div>
</template>

<script>
export default {
  components: {
    Title: () => import('@/components/text/Title'),
    Input: () => import('@/components/input/Input'),
    Button: () => import('@/components/button/Button'),
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  background: $green;
}

.hero {
  width: 100%;
}

.form {
  width: 100%;
  border-radius: 5px;
  padding: 30px;
  background: $white;
  box-shadow: 1px 1px 5px $default-text;

  &__input {
    margin-bottom: 15px;
  }

  &__button {
    margin: 0 auto;
  }
}
</style>
