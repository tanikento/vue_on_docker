<template>
  <v-container>
    <v-row justify="center">
      <v-col
        :cols="12"
        :md="10"
        :lg="8"
      >
        <slot/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass" scoped></style>

<script>
  export default {
    name: 'BasicLayout',
  }
</script>
