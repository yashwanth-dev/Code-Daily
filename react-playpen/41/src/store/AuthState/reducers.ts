import {AuthAction, LOGGED_IN, LOGGED_OUT} from './types';
import {Map} from 'immutable';

const InitialState = {
    IsLoggedIn: false
}

export function AuthReducer(state=InitialState, action: AuthAction) {
    let currentState = Map(state);
    switch (action.type) {
        case LOGGED_IN:
            return currentState.set('IsLoggedIn',action.payload.IsLoggedIn);
        case LOGGED_OUT:
            return currentState.set('IsLoggedIn',action.payload.IsLoggedIn);
        default:
            return state;
    }
}