export const mutations = {
  saveJobs: (state, jobs) => {
    state.jobs = jobs
  },
  saveApplications: (state, applications) => {
    state.applications = applications
    state.isJobSelected = true
  },
  saveUser: (state, user) => {
    state.user = user
    state.isUserLogged = true
  }
}
