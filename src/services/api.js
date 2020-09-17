import axios from 'axios'

const token = window.localStorage.getItem('token')

export const headers = { headers: { Authorization: `Bearer ${token}` } }

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})
