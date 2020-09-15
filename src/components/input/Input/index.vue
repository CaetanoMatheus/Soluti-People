<template>
  <InputWrapper :label="label" :icon="icon">
    <input class="input" v-bind="$attrs" :value="value" v-on="listeners" />
  </InputWrapper>
</template>

<script>
export default {
  inheritAttrs: false,

  components: {
    InputWrapper: () => import('@/components/wrapper/InputWrapper'),
  },

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
