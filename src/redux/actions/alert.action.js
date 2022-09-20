import * as ActionTypes from '../actiontypes';

export const setalertaction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SETALERT, payload: data })
}

export const resetalertaction = () => (dispatch) => {
    dispatch({ type: ActionTypes.RESETALERT})
}