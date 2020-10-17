import * as Actions from '../types';

const initialState = {
    users: [],
    loading: false,
    modal: false,
    message: ''
}

export default function setuser(state = initialState, action) {
    switch (action.type) {
        case Actions.START_SET_USER: {
            return {
                ...state,
                loading: true
            };
        }
        case Actions.SUCCESS_SET_USER: {
            return {
                ...state,
                users: action.payload,
                loading: false,
                message: 'Se ha completado el ingreso de datos',
                modal: true
            };
        }
        case Actions.FINISH_SET_USER: {
            return {
                ...state,
                modal: false
            };
        }
        case Actions.FAIL_SET_USER: {
            return {
                ...state,
                loading: false,
                message: 'Ha ocurrido un error...',
                modal: true
            };
        }
        default:
            return state;
    }
}