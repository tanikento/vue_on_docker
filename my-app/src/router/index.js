import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import Quiz from '../components/pages/Quiz.vue'
import QuizShow from '../components/pages/QuizShow.vue'
import QuizAnswer from '../components/pages/QuizAnswer.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quizzes',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/quiz-show',
      name: 'QuizShow',
      component: QuizShow
    },
    {
      path: '/quiz-answer',
      name: 'QuizAnswer',
      component: QuizAnswer
    }
  ]
})

export default router
