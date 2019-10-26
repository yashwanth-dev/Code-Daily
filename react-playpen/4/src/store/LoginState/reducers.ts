import {LoginActions, LOGGED_IN, LOGGED_OUT} from './types';
import {Map} from 'immutable';


const InitialState = {
    IsLoggedIn: false
}

export function LoginReducer(state=InitialState, action: LoginActions){
    let currentState = Map(state);
    switch (action.type) {
    case LOGGED_IN:
        return currentState.set('IsLoggedIn', true);
        break;
    case LOGGED_OUT:
        return currentState.set('IsLoggedIn', false);
        break;
    
    default:
        break;
}
}