<template>
  <div>
    <small class="message">{{ message }}</small>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.message {
  color: lighten($red, 15);
}
</style>
