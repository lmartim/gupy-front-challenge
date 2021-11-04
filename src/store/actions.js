// Actions disparadas, para realizar comunicação com o backend.
// MELHORIA: Atualizar a listagem de vagas, sem disparar a action getAllJobs, toda vez que é necessário recuperar a listagem atualizada.
// MELHORIA 2: Necessário fazer algumas correções no backend:
//    1. Na função findOneByEmail, dentro de account.service.ts, é esperado o retorno conter os dados do usuário, mas se o usuário não exister,
//      ocorre um erro, impossibilitando o cadastro de um novo usuário.
//    2. Na função create, dentro de job.service.ts, é feito um join, utilizando os applications de uma vaga nova,
//      que por ser nova, não possui applications, resultando em erro.
//    3. Necessário habilitar CORS, para desenvolvimento local.

const API_ADDRESS = process.env.VUE_APP_API_ADDRESS
import axios from 'axios'

export default {
  // Action responsável por obter todas as vagas
  getAllJobs: async ({ commit }) => {
    const { data } = await axios
      .get(`${API_ADDRESS}/jobs/list-all-jobs`)
      .then((response) => response)
      .catch((error) => {
        console.log('ERR: ', error)
      })

    commit('saveJobs', data.data)
  },
  // Action que cria uma vaga nova
  createJob: async ({ dispatch }, jobTitle) => {
    await axios
      .post(`${API_ADDRESS}/jobs/create-job`, {
        name: jobTitle
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('ERR: ', error)
      })

    dispatch('getAllJobs')
  },
  // Action para publicar uma vaga
  publishJob: async ({ dispatch }, jobId) => {
    await axios
      .patch(`${API_ADDRESS}/jobs/publish-job/${jobId}`)
      .then((response) => response)
      .catch((error) => {
        console.log('ERR: ', error)
      })

    dispatch('getAllJobs')
  },
  // Action que recupera todas as aplicações de uma vaga
  getJobApplications: async ({ commit }, jobId) => {
    const { data } = await axios
      .get(`${API_ADDRESS}/jobs/view-applications/${jobId}`)
      .then((response) => response)
      .catch((error) => {
        console.log('ERR: ', error)
      })

    commit('saveApplications', data.data)
  },
  // Actions para realizar o cadastro de um usuário
  createUser: async ({ commit }, userData) => {
    const { data } = await axios
      .post(`${API_ADDRESS}/accounts/create-account`, {
        name: userData.name,
        email: userData.email,
        password: userData.password
      })
      .then((response) => response)
      .catch((error) => error.response)

    if (data.statusCode === 400) {
      if (data.error) return data
      else {
        let errorArray = {
          message: []
        }
        errorArray.message.push(data.message)

        return errorArray
      }
    }

    commit('saveUser', data.data)
    return data
  },
  // Action que faz a aplicação de um usuário em uma vaga
  applyToJob: async ({ dispatch }, data) => {
    await axios
      .post(`${API_ADDRESS}/jobs/apply/${data.jobId}`, {
        accountId: data.id
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response))

    dispatch('getAllJobs')
  }
}
