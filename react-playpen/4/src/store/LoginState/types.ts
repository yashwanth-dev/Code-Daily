export interface LoginState{
    IsLoggedin: boolean;
}

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

interface LoggedInAction {
    type: typeof LOGGED_IN,
    payload: LoginState
}

interface LoggedOutAction {
    type: typeof LOGGED_OUT,
    payload: LoginState
}

export type LoginActions = LoggedInAction | LoggedOutAction;