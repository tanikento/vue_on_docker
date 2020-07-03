<template>
  <BasicLayout>
    <QuizSlider/><br><br>
    <p>クイズ数：100ドリル数：50回答数：200</p>
    <Title2 :title2="'Popular Qiuzzes'"></Title2>
    <v-row class="flex-nowrap" style="overflow-x: scroll;">
      <v-col
        v-for="card in cards"
        :key="card.title"
      >
        <v-card
          elevation="6"
          width="230"
          :color="card.color"
          hover
        >

          <v-card-actions class="py-0">
            <v-list-item class="grow px-0">
              <v-list-item-avatar color="grey darken-3" size="36">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>

          <v-card-title class="py-0">
            <h3>{{ card.title }}</h3>
          </v-card-title>

          <v-card-text class="py-0">
            <v-row>
              <v-col
                class="py-2 px-1"
                style="flex-grow: 0;"
                v-for="tag in tags.slice(0, 3)"
                :key="tag.name"
              >
                <v-btn
                  color="deep-purple darken-4"
                  rounded
                  dark
                  x-small
                >
                  {{ tag.name }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-list class="transparent">
            <v-list-item
              v-for="item in forecast"
              :key="item.day"
              class="py-0"
              style="min-height: 24px;"
            >
              <v-list-item-title style="font-size: 14px;">{{ item.day }}</v-list-item-title>

              <v-list-item-subtitle class="text-right">
                {{ item.temp }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            100

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
            50

            <v-spacer/>

            <v-btn icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-btn>
            120
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <Title2 :title2="'Popular Tags'"></Title2>
    <v-row class="flex-nowrap" style="overflow-x: scroll;">
      <v-col
        class="py-2 px-1"
        style="flex-grow: 0;"
        v-for="tag in tags"
        :key="tag.name"
      >
        <v-btn
          color="deep-purple darken-4"
          rounded
          dark
        >
          {{ tag.name }}
        </v-btn>
      </v-col>
    </v-row>
    <Title2 :title2="'New Quizzes'"></Title2>
    <v-row class="flex-nowrap" style="overflow-x: scroll;">
      <v-col
        v-for="card in cards"
        :key="card.title"
      >
        <v-card
          elevation="6"
          width="230"
          :color="card.color"
          hover
        >

          <v-card-actions class="py-0">
            <v-list-item class="grow px-0">
              <v-list-item-avatar color="grey darken-3" size="36">
                <v-img
                  class="elevation-6"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>

          <v-card-title class="py-0">
            <h3>{{ card.title }}</h3>
          </v-card-title>

          <v-card-text class="py-0">
            <v-row>
              <v-col
                class="py-2 px-1"
                style="flex-grow: 0;"
                v-for="tag in tags.slice(0, 3)"
                :key="tag.name"
              >
                <v-btn
                  color="deep-purple darken-4"
                  rounded
                  dark
                  x-small
                >
                  {{ tag.name }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-list class="transparent">
            <v-list-item
              v-for="item in forecast"
              :key="item.day"
              class="py-0"
              style="min-height: 24px;"
            >
              <v-list-item-title style="font-size: 14px;">{{ item.day }}</v-list-item-title>

              <v-list-item-subtitle class="text-right">
                {{ item.temp }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            100

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
            50

            <v-spacer/>

            <v-btn icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-btn>
            120
          </v-card-actions>
        </v-card>
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
    padding: 20px
    position: relative
    font-size: 20px
    width: 100%
    text-align: justify
  h3::before, h3::after
    content: ''
    width: 20px
    height: 20px
    position: absolute
  h3::before
    border-left: solid 2px #000000
    border-top: solid 2px #000000
    top: 0
    left: 0
  h3::after
    border-right: solid 2px #000000
    border-bottom: solid 2px #000000
    bottom: 0
    right: 0
  .v-btn
    text-transform: none
</style>

<script>
  import BasicLayout from './BasicLayout';
  import QuizSlider from '../organisms/QuizSlider';
  import Title2 from '../atoms/Title2';

  export default {
    name: 'HomeLayout',
    components: {
      BasicLayout,
      QuizSlider,
      Title2
    },
    data () {
      return {
        cards: [
          { title: 'Ruby初心者向け', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', color: 'amber' },
          { title: 'Python初心者向け', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', color: 'amber' },
          { title: 'Ruby技術者認定試験 Silver対策', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', color: 'amber' },
          { title: 'Ruby技術者認定試験 Gold対策', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: '基本情報技術者試験対策', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: 'AWS 認定ソリューションアーキテクト対策', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: 'ウェブデザイン技能検定対策', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', color: 'amber' },
        ],
        forecast: [
          { day: '設問数', icon: 'mdi-white-balance-sunny', temp: '10問' },
          { day: '最高点', icon: 'mdi-white-balance-sunny', temp: '100点' },
          { day: '平均点', icon: 'mdi-cloud', temp: '70点' },
        ],
        tags: [
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
