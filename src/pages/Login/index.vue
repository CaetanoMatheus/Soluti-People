<template>
  <div class="login">
    <img
      class="hero"
      src="@/assets/svg/authentication.svg"
      alt="Authentication"
    />
    <div class="content">
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

        <span class="form__registerMessage">
          Não possui uma conta?
          <router-link :to="{ name: 'Register' }">Cadastre-se</router-link>
        </span>
      </form>
    </div>
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
  max-width: 1500px;
  margin: 0 auto;
  padding: 30px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;

  }
}

.hero {
  width: 100%;
  max-width: 600px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
  border-radius: 5px;
  padding: 30px;
  background: $white;
  box-shadow: 1px 1px 5px $default-text;

  &__input {
    margin-bottom: 15px;
  }

  &__button {
    margin: 30px auto;
  }

  &__registerMessage {
    font-size: 15px;
    color: darken($light-grey, 40);
  }
}
</style>
