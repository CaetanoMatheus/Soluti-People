<template>
  <div class="userDropdown">
    <button
      class="button"
      type="button"
      @click="toggleList"
    >
      <div class="button__text">
        <h4 class="button__name">{{ user.name }}</h4>
        <small class="button__email">{{ user.email }}</small>
      </div>
      <Unicon class="label__icon" name="angle-down" fill="white" />
    </button>

    <ul class="list" :class="{ 'list--active': showList }">
      <li class="list__item" @click="goToEditPage">
        Perfil
      </li>
      <li class="list__item" @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/getAuthenticatedUser',
    }),
  },

  data: () => ({
    showList: false,
  }),

  methods: {
    toggleList() {
      this.showList = !this.showList
    },

    goToEditPage() {
      this.toggleList()
      this.$router.push({ name: 'Edit', params: { id: this.user.id } })
    },

    logout() {
      this.toggleList()
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style lang="scss" scoped>
.userDropdown {
  position: relative;
}

.button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: $green;
  transition: background 0.5s;

  &:hover {
    background: darken($green, 10);
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 5px;
    color: $white;
  }

  &__name {
    color: $white;
  }

  &__email {
    color: $light-grey;
  }
}

.list {
  position: absolute;
  display: none;
  top: 50px;
  right: 0;
  min-width: 100%;
  list-style: none;

  &--active {
    display: block;
  }

  &__item {
    cursor: pointer;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    background: $white;
    box-shadow: 1px 1px 3px $default-text;
    transition: background 0.5s;

    &:hover {
      background: lighten($green, 30);
    }
  }
}
</style>
