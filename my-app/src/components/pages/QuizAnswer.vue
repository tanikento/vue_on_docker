<template>
  <BasicLayout>
    <Title2 :title2="'Ruby技術者認定試験 Silver対策'"></Title2>
    <v-row>
      <v-col
        v-for="(card, i) in cards"
        :key="i"
        cols="12"
      >

        <v-divider/>

        <v-card
          color="amber lighten-5"
          flat
        >
          <v-card-title>
            <h3><span style="font-size: 24px;">Q{{ i + 1 }}.</span> {{ card.title }}</h3>
          </v-card-title>

          <v-card-text>
            {{ card.overview }}
          </v-card-text>

          <v-row justify="center">
            <v-col
              v-for="answer in card.answers"
              :key="answer"
              cols="12"
              sm="8"
              md="6"
              lg="6"
            >
              <v-btn
                color="red darken-4"
                outlined
                large
                block
              >
                {{ answer }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-btn
          color="red darken-4"
          outlined
          x-large
          block
        >
          回答を終了する
        </v-btn>
      </v-col>
    </v-row>
    <router-link to="/">Home</router-link> |
    <router-link to="/quizzes">Quiz</router-link> |
    <router-link to="/quiz-show">QuizShow</router-link> |
    <router-link to="/quiz-answer">QuizAnswer</router-link>
  </BasicLayout>
</template>

  <style lang="sass" scoped>
    .layout::-webkit-scrollbar
      display: none
    .row::-webkit-scrollbar
      display: none
    h3
      font-size: 22px
  </style>

<script>
  import BasicLayout from '../templates/BasicLayout';
  import Title2 from '../atoms/Title2';

  export default {
    name: 'QuizAnswer',
    components: {
      BasicLayout,
      Title2
    },
    data () {
      return {
        cards: [
          { title: '下記の場合の出力結果は？', overview: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", answers: ["aaa", "bbb", "ccc", "ddd"] },
          { title: '1 + 1 = ?', overview: "", answers: ["aaa", "bbb", "ccc", "ddd"] },
          { title: '1 + 1 = ?', overview: "", answers: ["aaa", "bbb", "ccc", "ddd"] },
          { title: '下記の場合の出力結果は？', overview: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", answers: ["aaa", "bbb", "ccc", "ddd"] },
          { title: '1 + 1 = ?', overview: "", answers: ["aaa", "bbb", "ccc", "ddd"] },
        ],
        forecast: [
          { day: '設問数', icon: 'mdi-white-balance-sunny', temp: '10問' },
          { day: '最高点', icon: 'mdi-white-balance-sunny', temp: '100点' },
          { day: '平均点', icon: 'mdi-cloud', temp: '70点' },
        ],
        timestamps: [
          { day: '作成日', temp: '2020-06-20' },
          { day: '更新日', temp: '2020-06-29' },
        ],
        tags: [
          { name: 'Ruby' },
          { name: 'Rails' },
          { name: 'Python' },
          { name: '初心者' },
          { name: 'Vue.js' },
          { name: 'AWS' },
        ],
        items: [
          '新着順',
          '作成順',
          'いいねが多い順',
          '回答者が多い順'
        ]
      }
    },
  }
</script>
