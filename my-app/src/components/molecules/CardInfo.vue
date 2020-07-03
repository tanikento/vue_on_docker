<template>
  <div>
    <v-list-item-title>
      {{ info.key }}
    </v-list-item-title>
    <v-list-item-subtitle class="text-right">
      {{ info.value }}
    </v-list-item-subtitle>
  </div>
</template>

<style lang="sass" scoped>
  .v-list-item__title
    font-size: 14px
</style>

<script>
  export default {
    name: 'CardInfo',
    props: {
      info: {
        type: Object,
        default: {},
        required: true
      }
    },
  }
</script>
