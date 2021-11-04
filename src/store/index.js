import { createStore } from 'vuex'
import { mutations } from './mutations'
import { getters } from './getters'
import actions from './actions'

export default createStore({
  state: {
    jobs: {},
    applications: {},
    isJobSelected: false,
    user: {},
    isUserLogged: false
  },
  mutations,
  getters,
  actions
})
