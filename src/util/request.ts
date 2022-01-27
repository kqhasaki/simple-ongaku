import axios from 'axios'

const baseURL = 'https://netease-cloud-music-api-opal-alpha.vercel.app/'

axios.defaults.timeout = 600000
axios.defaults.baseURL = baseURL

axios.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

function get(url: string, data: object = {}) {
  return axios({
    method: 'GET',
    url,
    data,
  })
}

function post(url: string, data: object) {
  return axios({
    method: 'POST',
    url,
    data,
  })
}

export { get, post }
