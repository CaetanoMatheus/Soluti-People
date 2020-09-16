<template>
  <div class="formTitle">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.formTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
