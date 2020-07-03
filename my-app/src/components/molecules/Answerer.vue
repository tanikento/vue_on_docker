<template>
  <v-btn icon>
    <v-icon>mdi-account-multiple</v-icon>
  </v-btn>
  {{ counter }}
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: 'Answerer',
    props: {
      counter: {
        type: Number,
        default: 0,
        required: false
      }
    },
  }
</script>
