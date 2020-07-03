<template>
  <v-btn icon>
    <v-icon>mdi-thumb-up</v-icon>
  </v-btn>
  {{ counter }}
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: 'Good',
    props: {
      counter: {
        type: Number,
        default: 0,
        required: false
      }
    },
  }
</script>
