
import {
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_REQUEST
} from '../constants/constantsPage'

// export function setYear(year) {
//   return {
//     type: SET_YEAR,
//     payload: year
//   }
// }


export function getPhotos(year) {

  return (dispatch) => {
   dispatch({
     type: GET_PHOTOS_REQUEST,
     payload: year
   })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5, 6, 7]
      })
    }, 1000)
  }
}