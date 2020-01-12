import axios from 'axios'

export async function getInfo() {
  return await axios.get('/api/info')
}