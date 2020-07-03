<template>
  <v-btn icon>
    <v-icon>mdi-bookmark</v-icon>
  </v-btn>
  {{ counter }}
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: 'Bookmark',
    props: {
      counter: {
        type: Number,
        default: 0,
        required: false
      }
    },
  }
</script>
