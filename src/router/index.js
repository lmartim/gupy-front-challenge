import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import Candidate from '../views/Candidate.vue'
import Register from '../components/candidate/Register.vue'
import JobsList from '../components/candidate/JobsList.vue'

import Interviewer from '../views/Interviewer.vue'

import Recruiter from '../views/Recruiter.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/pessoa-candidata',
    component: Candidate,
    children: [
      {
        path: 'registro',
        component: Register
      },
      {
        path: 'listagem',
        component: JobsList
      }
    ]
  },
  {
    path: '/pessoa-entrevistadora',
    component: Interviewer
  },
  {
    path: '/pessoa-recrutadora',
    component: Recruiter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
