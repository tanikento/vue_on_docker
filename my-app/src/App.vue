<template>
  <v-app id="app">
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>
