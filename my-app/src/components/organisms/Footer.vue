<template>
  <v-footer
    padless
    dark
  >
    <v-card
      flat
      tile
      class="blue-grey darken-4 text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        プライバシーポリシー | サイトマップ
      </v-card-text>
      
      <v-divider/>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>IT Quiz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        icons: [
          'mdi-home',
          'mdi-email',
          'mdi-calendar',
          'mdi-delete',
        ],
      }
    }
  }
</script>
