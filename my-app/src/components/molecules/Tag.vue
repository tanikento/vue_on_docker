<template>
  <v-chip
    color="deep-purple darken-4"
    text-color="white"
    small
  >
    {{ tag }}
  </v-chip>
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: 'Good',
    props: {
      tag: {
        type: String,
        default: '',
        required: true
      }
    },
  }
</script>
