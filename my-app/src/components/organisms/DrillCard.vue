<template>
  <v-card
    elevation="6"
    width="230"
    :color="'amber'"
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
      <v-chip-group
        v-for="tag in card.tags"
        v-model="selection"
        column
      >
        <Tag :tag="tag"></Tag>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-list class="transparent">
      <v-list-item
        v-for="item in forecast"
        class="py-0"
        style="min-height: 24px;"
      >
        <CardInfo :info="item"></CardInfo>
      </v-list-item>
    </v-list>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <Good :counter="100"></Good>
      <Bookmark :counter="50"></Bookmark>
      <v-spacer/>
      <Answerer :counter="120"></Answerer>
    </v-card-actions>
  </v-card>
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
</style>

<script>
  import Tag from '../molecules/Tag';
  import CardInfo from '../molecules/CardInfo';
  import Good from '../molecules/Good';
  import Bookmark from '../molecules/Bookmark';
  import Answerer from '../molecules/Answerer';

  export default {
    name: 'DrillCard',
    components: {
      Good,
      Bookmark,
      Answerer,
    },
    props: {
      card: {
        type: Object,
        default: {},
        required: true
      }
    },
  }
</script>
