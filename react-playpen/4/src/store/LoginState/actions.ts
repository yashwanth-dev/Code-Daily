import {LoginState, LOGGED_IN, LOGGED_OUT} from './types';

export function Login(data: LoginState){
    return {
        type: typeof LOGGED_IN,
        payload: data
    }
}

export function Logout(data:LoginState){
    return {
        type: typeof LOGGED_OUT,
        payload: data
    }
}