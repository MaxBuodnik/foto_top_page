import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_FAIL
} from '../constants/constantsUser'

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })

    window.VK.Auth.login((r) => {
      if (r.session) {
        let username = r.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCES,
          payload: username
        })
      } else {
        dispatch({
          typeL: LOGIN_FAIL,
          error: true,
          payload: new Error('the error of authentication')
        })
      }
    }, 4); //request rights of accessing to photo

  }
}