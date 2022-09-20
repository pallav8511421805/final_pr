import * as ActionTypes from '../actiontypes'

export const signupaction = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_UP, payload: values })
}

export const signinaction = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_IN, payload: values })
}

export const signedinaction = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.SIGNED_IN, payload: values })
}

export const Logoutaction = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUT })
}
export const Logoutedaction = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGOUTED })
}

export const signingoogle = () => (dispatch) => {
  dispatch({ type: ActionTypes.SIGN_INGOOGLE })
}

export const forgetpasswordaction = (values) => (dispatch) => {
  dispatch({ type: ActionTypes.FORGET, payload: values })
}
