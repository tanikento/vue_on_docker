<template>
  <v-card
    elevation="6"
    max-width="100%"
    class="mx-auto"
  >
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="'blue-grey darken-4'"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h3>{{ slide.title }}</h3><br><br>
            <div>{{ slide.overview }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<style lang="sass" scoped>
  h3
    font-size: 20px
</style>

<script>
  export default {
    name: 'QuizSlider',
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          { title:'下記の場合の出力結果は？', overview: 'aaaaaaaaaaaaaaa' },
          { title:'1 + 1 = ?', overview: '' },
          { title:'HTMLは何の略？', overview: '' },
          { title:'下記の場合の出力結果は？', overview: 'bbbbbbbbbbbbbbbbbbbb' },
          { title:'2 × 3 = ?', overview: '' },
        ],
      }
    },
  }
</script>
