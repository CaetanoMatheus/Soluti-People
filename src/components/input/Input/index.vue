<template>
  <InputWrapper :label="label" :icon="icon">
    <input class="input" v-bind="$attrs" :value="value" v-on="listeners" />
  </InputWrapper>
</template>

<script>
// import { TheMask } from 'vue-the-mask'

export default {
  inheritAttrs: false,

  components: {
    InputWrapper: () => import('@/components/wrapper/InputWrapper'),
  },

  // components: {
  //   TheMask,
  // },

  props: {
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      }
    },
  },
}
</script>
