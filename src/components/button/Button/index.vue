<template>
  <div class="container">
    <button class="button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
  height: 45px;
  border: 1px 1px 5px $light-grey;
  border-radius: 5px;
  background: $green;
  transition: background .5s;

  &:hover {
      background: darken($green, 10);
  }
}

.button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  color: $white;
  background: transparent;
}
</style>
