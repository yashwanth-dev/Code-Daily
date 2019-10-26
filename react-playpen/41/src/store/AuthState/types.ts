import AuthState from './state';

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

interface LoggedInAction{
type:typeof LOGGED_IN,
payload: AuthState
}

interface LoggedOutAction {
type: typeof LOGGED_OUT,
payload: AuthState
}

export type AuthAction = LoggedInAction | LoggedOutAction;