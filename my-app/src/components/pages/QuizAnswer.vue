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
          color="white"
          flat
        >
          <v-card-title>
            <h3><span style="font-size: 24px;">Q{{ i + 1 }}.</span> {{ card.title }}</h3>
          </v-card-title>

          <v-card-text>
            {{ card.overview }}

            <v-row justify="center">
              <v-col
                v-for="answer in card.answers"
                :key="answer.id"
                cols="12"
              >
                <div style="font-size: 16px;">
                  {{ answer.id }}. {{ answer.val }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-row justify="center">
            <v-col
              v-for="answer in card.answers"
              :key="answer.id"
              cols="4"
            >
              <v-btn
                color="amber"
                outlined
                block
                elevation="2"
              >
                {{ answer.id }}
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
          color="amber"
          elevation="6"
          large
          block
        >
          <strong>回答を終了する</strong>
        </v-btn>
      </v-col>
    </v-row>
    <div class="button-radio">
      <input id="bar1" type="radio" name="foo" value="bar1" checked>
      <label for="bar1">ボタン１</label>
      <input id="bar2" type="radio" name="foo" value="bar2">
      <label for="bar2">ボタン２</label>
      <input id="bar3" type="radio" name="foo" value="bar3">
      <label for="bar3">ボタン３</label>
    </div>
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

  .button-radio input[type="radio"]
    display: none

  .button-radio label
    display: inline-block
    color: #fff
    background-color: #2780e3
    padding: 5px 10px

  .button-radio input[type="radio"]:checked + label
    background-color: #000
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
          { title: '下記の場合の出力結果は？', overview: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", answers: [{id: "A", val: "aaa"}, {id: "B", val: "bbb"}, {id: "C", val: "ccc"}] },
          { title: '1 + 1 = ?', overview: "", answers: [{id: "A", val: "aaa"}, {id: "B", val: "bbb"}, {id: "C", val: "ccc"}] },
          { title: '1 + 1 = ?', overview: "", answers: [{id: "A", val: "aaa"}, {id: "B", val: "bbb"}, {id: "C", val: "ccc"}] },
          { title: '下記の場合の出力結果は？', overview: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", answers: [{id: "A", val: "aaa"}, {id: "B", val: "bbb"}, {id: "C", val: "ccc"}] },
          { title: '1 + 1 = ?', overview: "", answers: [{id: "A", val: "aaa"}, {id: "B", val: "bbb"}, {id: "C", val: "ccc"}] },
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
