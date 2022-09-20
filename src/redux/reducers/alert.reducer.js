import * as ActionTypes from '../actiontypes';

const initval = {
    text: '',
    color: '',
}
export const alertreducer = (state = initval, action) => {
    switch (action.type) {
        case ActionTypes.SETALERT:
            return {
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.RESETALERT:
            return {
                text: '',
                color: ''
            }
        default:
            return state;
    }
}