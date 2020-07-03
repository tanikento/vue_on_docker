<template>
  <HomeLayout/>
</template>

<script>
  import HomeLayout from '../templates/HomeLayout';
  export default {
    name: 'Home',
    components: {
      HomeLayout
    },
    data () {
      return {
        drills: [
          {
            title: 'Ruby初心者向け',
            quiz: 10,
            highscore: 100,
            Average: 70,
            good: 100,
            bookmark: 50,
            answerer: 120,
            user: 'ユーザー１',
            tags : [
              { name: 'Ruby' },
              { name: '初心者' },
            ],
          },
          {
            title: 'Python初心者向け',
            quiz: 10,
            highscore: 100,
            Average: 70,
            good: 100,
            bookmark: 50,
            answerer: 120,
            user: 'ユーザー２',
            tags : [
              { name: 'Python' },
              { name: '初心者' },
            ],
          },
          {
            title: 'Ruby技術者認定試験 Silver対策',
            quiz: 10,
            highscore: 100,
            Average: 70,
            good: 100,
            bookmark: 50,
            answerer: 120,
            user: 'ユーザー２',
            tags : [
              { name: 'Ruby' },
              { name: '初心者' },
              { name: '中級者' },
            ],
          },
          {
            title: 'Ruby技術者認定試験 Gold対策',
            quiz: 10,
            highscore: 100,
            Average: 70,
            good: 100,
            bookmark: 50,
            answerer: 120,
            user: 'ユーザー２',
            tags : [
              { name: 'Ruby' },
              { name: '中級者' },
              { name: '上級者' },
            ],
          },
        ],
        popular_tags: [
          { name: 'Ruby' },
          { name: 'Rails' },
          { name: 'Python' },
          { name: '初心者' },
          { name: 'Vue.js' },
          { name: 'AWS' },
        ],
      }
    },
  }
</script>
