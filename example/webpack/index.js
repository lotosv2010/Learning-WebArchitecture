import { getPic } from './src/utils/tools'
import { getUser } from './src/server/user'
import './src/style/index.scss'

getPic()


getUser()
  .then(res => console.log(res))
  .catch(error => console.log(error))


export default {}