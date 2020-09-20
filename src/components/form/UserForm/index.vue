<template>
  <div class="userForm" @submit.prevent="updateUser">
    <h4 class="form__message">
      <InputError :message="errors.message" v-if="errors.message" />
    </h4>

    <form class="form">
      <br />
      <FormTitle title="Dados Pessoais" />

      <Input
        class="form__input"
        label="Nome"
        icon="user"
        placeholder="Insira o seu nome"
        v-model="user.name"
      />
      <InputError :message="errors.name[0]" v-if="errors.name" />

      <InputWrapper class="form__input" label="CPF" icon="files-landscapes-alt">
        <TheMask
          class="input"
          placeholder="Insira o seu CPF"
          :mask="['###.###.###-##']"
          v-model="user.cpf"
        />
      </InputWrapper>
      <InputError :message="errors.cpf[0]" v-if="errors.cpf" />

      <Input
        class="form__input"
        label="Data de nascimento"
        icon="calendar-alt"
        type="date"
        v-model="user.date_of_birth"
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
        v-model="user.email"
      />
      <InputError :message="errors.email[0]" v-if="errors.email" />

      <Input
        class="form__input"
        label="Senha"
        icon="lock"
        type="password"
        placeholder="Insira a sua senha"
        v-model="user.password"
      />
      <InputError :message="errors.password[0]" v-if="errors.password" />

      <Input
        class="form__input"
        label="Repetir Senha"
        icon="lock"
        type="password"
        placeholder="Insira a sua senha"
        v-model="user.password_confirmation"
      />

      <br />
      <FormTitle title="Telefone">
        <button class="form__newData" type="button" @click="addTelephone">
          <Unicon class="label__icon" name="plus" fill="limegreen" />
          Novo Telefone
        </button>
      </FormTitle>

      <InputWrapper
        class="form__input form__telephoneItem"
        icon="phone"
        :label="`Telephone ${index + 1}`"
        :key="index"
        v-for="(telephone, index) in user.telephones"
      >
        <TheMask
          class="input"
          placeholder="Insira um telefone"
          v-model="telephone.number"
          :mask="['(##) ####-####', '(##) #####-####']"
        />
        <button
          class="form__telephoneButton"
          type="button"
          @click="removeTelephone(telephone.id)"
        >
          <Unicon class="label__icon" name="trash" fill="white" />
        </button>
      </InputWrapper>

      <br />
      <FormTitle title="Dados do Endereço">
        <button
          class="form__newData"
          type="button"
          v-if="!user.address"
          @click="addAddress"
        >
          <Unicon class="label__icon" name="plus" fill="limegreen" />
          Novo Endereço
        </button>
      </FormTitle>

      <div v-if="user.address">
        <Input
          class="form__input"
          label="Rua"
          icon="home"
          placeholder="Insira a rua"
          v-model="user.address.street"
        />

        <Input
          class="form__input"
          label="Número"
          icon="home"
          placeholder="Insira o número"
          v-model="user.address.number"
        />

        <Input
          class="form__input"
          label="Complemento"
          icon="home"
          placeholder="Insira o complemento"
          v-model="user.address.component"
        />

        <Input
          class="form__input"
          label="Bairro"
          icon="home"
          placeholder="Insira o bairro"
          v-model="user.address.neighborhood"
        />

        <Input
          class="form__input"
          label="Cidade"
          icon="home"
          placeholder="Insira a cidade"
          v-model="user.address.city"
        />

        <Input
          class="form__input"
          label="State"
          icon="home"
          placeholder="Insira o estado"
          v-model="user.address.state"
        />
      </div>

      <div class="form__bottom">
        <DoubleBounce class="form__button" v-if="isLoading" />
        <Button class="form__button" text="Salvar dados" v-else />
        <span class="form__goUp" @click="scrollTo('header')">
          Subir
          <Unicon class="label__icon" name="top-arrow-from-top" fill="limegreen" />
        </span>
      </div>
    </form>
  </div>
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
    FormTitle: () => import('@/components/text/FormTitle'),
    Button: () => import('@/components/button/Button'),
  },

  computed: {
    ...mapGetters({
      user: 'user/getUser',
      errors: 'getErrors',
      isLoading: 'getIsLoading',
    }),
  },

  methods: {
    removeTelephone(id) {
      this.$store.dispatch('user/removeTelephone', id)
    },

    addTelephone() {
      this.$store.dispatch('user/addTelephone', { number: '' })
    },

    addAddress() {
      this.$store.commit('user/setUserAddress', {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      })
    },

    showPopUp(icon, title) {
      window.Swal.toast().fire({ icon, title })
    },

    scrollTo(id) {
      const element = document.getElementById(id)
      this.$smoothScroll({ scrollTo: element })
    },

    async updateUser() {
      const result = await this.$store.dispatch('user/update', this.user)
      if (result) {
        this.scrollTo('header')
        this.showPopUp('success', 'Dados atualizados com sucesso.')
      } else {
        this.scrollTo('editPage')
        this.showPopUp('error', 'Falha ao atualizar dados.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.userForm {
  padding: 30px;
  border-radius: 5px;
  background: $white;
  box-shadow: 1px 1px 5px $default-text;
}

.form {
  &__input,
  &__button {
    margin-top: 20px;
  }

  &__telephoneItem {
    position: relative;
  }

  &__telephoneButton,
  &__newData {
    cursor: pointer;
    outline: none;
    border: none;
    transition: 0.5s;
  }

  &__telephoneButton {
    position: absolute;
    top: 27px;
    right: 3px;
    height: 41px;
    padding: 5px;
    border-radius: 5px;
    background: lighten($red, 20);

    &:hover {
      background: darken($red, 10);
    }
  }

  &__newData {
    display: flex;
    align-items: center;
    background: transparent;

    &:hover {
      font-size: 14px;
      text-decoration: underline;
    }
  }

  &__bottom, &__goUp  {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }

  &__goUp  {
    cursor: pointer;
    margin-top: 20px;
    text-decoration: none;
    transition: .3s;

    &:hover {
      background: $light-grey;
      margin-right: -10px;
      border-radius: 20px;
      padding: 5px 10px 5px 20px;
    }
  }
}
</style>
