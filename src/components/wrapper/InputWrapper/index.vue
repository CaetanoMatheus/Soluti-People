<template>
  <div class="container">
    <label class="label">
      <Unicon class="label__icon" :name="icon" fill="limegreen" v-if="icon" />
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
.container {
  width: 100%;
}

.label {
  display: flex;
  align-items: center;

  &__icon {
    display: flex;
    align-items: center;
    margin: 0 5px 0 2px;
  }
}

.input {
  width: 100%;
  height: 45px;
  padding: 0 10px;
  outline: none;
  border: 1px solid $light-grey;
  border-radius: 5px;
  background: lighten($light-grey, 10);
  transition: background .5s;

  &:focus {
    background: $white;
  }
}
</style>
