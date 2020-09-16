<template>
  <div class="login">
    <img
      class="hero"
      src="@/assets/svg/authentication.svg"
      alt="Authentication"
    />
    <div class="content">
      <Title
        title="Acessar"
        subText="Acesse o Soluti People"
        v-if="loginRoute"
      />
      <Title
        title="Cadastrar-se"
        subText="Cadastre-se no Soluti People"
        v-else
      />

      <div class="content__form">
        <LoginForm :errors="errors" v-if="loginRoute" />
        <RegistrationForm :errors="errors" v-else />

        <span class="form__registerMessage">
          {{
            loginRoute ? "Ainda não possui uma conta?" : "Já possui uma conta?"
          }}
          <router-link :to="{ name: 'Register' }" v-if="loginRoute">
            Cadastre-se
          </router-link>
          <router-link :to="{ name: 'Login' }" v-else>
            Acesse
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Title: () => import('@/components/text/Title'),
    LoginForm: () => import('@/pages/Auth/LoginForm'),
    RegistrationForm: () => import('@/pages/Auth/RegistrationForm'),
  },

  computed: {
    ...mapGetters({
      errors: 'getErrors',
    }),

    loginRoute() {
      return this.$route.name === 'Login'
    },
  },
}
</script>

<style lang="scss">
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
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__form {
    width: 100%;
    margin: 10px 0;
    padding: 30px;
    border-radius: 5px;
    background: $white;
    box-shadow: 1px 1px 5px $default-text;
  }
}

.form {
  &__message {
    margin-bottom: 15px;
  }

  &__input {
    margin-top: 15px;
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
