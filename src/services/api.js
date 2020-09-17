import axios from 'axios'

const token = window.localStorage.getItem('token')

export const headers = { headers: { Authorization: `Bearer ${token}` } }

export function verifyAuthentication(status) {
  if (status === 401) {
    window.localStorage.removeItem('token')
    document.location.reload()
  }
}

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})
