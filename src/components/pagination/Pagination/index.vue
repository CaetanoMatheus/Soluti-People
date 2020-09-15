<template>
  <div class="container">
    <button
      class="item previous"
      v-if="data.current_page > 1"
      @click="previousPage"
    >
      <Unicon name="angle-left" fill="limegreen" />
      Anterior
    </button>

    <button class="current">{{ data.current_page }}</button>

    <button
      class="item next"
      v-if="data.current_page < data.last_page"
      @click="nextPage"
    >
      Próximo
      <Unicon name="angle-right" fill="limegreen" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      data: 'user/getUsers',
    }),
  },

  methods: {
    nextPage() {
      this.$store.dispatch('user/all', this.data.current_page + 1)
    },

    previousPage() {
      this.$store.dispatch('user/all', this.data.current_page - 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.current, .item {
  min-width: 30px;
  height: 30px;
  margin: 0 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px $default-text;
}

.current {
  padding: 5px;
  font-weight: bold;
  color: $white;
  background: lighten($green, 10);
}

.item {
  cursor: pointer;
  display: flex;
  background: $white;
  transition: background .5s;

  &:hover {
    background: lighten($green, 20);
  }
}

.next {
  padding: 5px 5px 5px 15px;
}

.previous {
  padding: 5px 15px 5px 5px;
}
</style>
