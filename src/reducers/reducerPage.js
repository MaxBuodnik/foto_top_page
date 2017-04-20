import {GET_PHOTOS_SUCCESS, GET_PHOTOS_REQUEST} from '../constants/constantsPage'

const initialState = {
  year: 2017,
  photos: [],
  fetching: false
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {...state, year: action.payload, fetching: true}

    case GET_PHOTOS_SUCCESS:
      return {...state, photos: action.payload, fetching: false}
    default:
      return state
  }
}