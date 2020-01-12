import { getInfo } from '../api/user'

export async function getUser() {
  try {
    const res = await getInfo()
    return res
  } catch (error) {
    console.log(error)
  }
}