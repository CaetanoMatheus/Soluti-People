<template>
  <div class="title">
    <h1 class="title__mainTitle">{{ title }}</h1>
    <div class="title__subtext">
      <h5 class="title__subtextText">{{ subText }}</h5>
      <Unicon name="arrow" fill="limegreen" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  &__mainTitle {
    color: $white;
  }

  &__subtext {
    display: flex;
    align-items: center;
  }

  &__subtextText {
    color: $light-grey;
    margin: 0 5px 6px 0;
  }
}
</style>
