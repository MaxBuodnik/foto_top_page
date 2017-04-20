import { combineReducers } from 'redux'
import user from './reducerUser'
import page from './reducerPage'




  export default combineReducers({
    page,
    user
  })

