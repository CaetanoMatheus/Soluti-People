<template>
  <div class="userDropdown">
    <button class="button">
      <div class="button__text">
        <h4 class="button__name">{{ user.name }}</h4>
        <small class="button__email">{{ user.email }}</small>
      </div>
      <Unicon class="label__icon" name="angle-down" fill="white" />
    </button>
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
}
</script>

<style lang="scss" scoped>
.userDropdown {

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
  transition: background .5s;

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
</style>
