<template>
  <div id="title2">
    <h2>{{ title2 }}</h2>
  </div>
</template>

<style lang="sass" scoped>
  h2
    font-weight: bold
    font-size: 24px
</style>

<script>
export default {
  props: {
    title2: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
