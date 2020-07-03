<template>
  <v-app-bar
    app
    flat
    elevation="6"
  >
    <BasicLayout>
      <v-row>
        <v-col cols="4">
          <v-toolbar-title>
            <h1>IT Quiz</h1>
          </v-toolbar-title>
        </v-col>
        <v-col cols="8">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </BasicLayout>
  </v-app-bar>
</template>

<style lang="sass" scoped>
  h1
    font-size: 28px
    color: #FFC107
    text-stroke: 1.5px #311B92
    -webkit-text-stroke: 1.5px #311B92
</style>

<script>
  import BasicLayout from '../templates/BasicLayout';
  export default {
    name: 'Header',
    components: {
      BasicLayout
    },
  }
</script>
