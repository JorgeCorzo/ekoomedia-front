import * as types from '../types';

export function setUser(user){
    return{
        type: types.START_SET_USER,
        payload: user
    }
}