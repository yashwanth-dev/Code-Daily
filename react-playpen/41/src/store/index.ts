import {createStore, combineReducers} from 'redux';
import {AuthReducer} from './AuthState/reducers';

const rootReducer = combineReducers(AuthReducer);


export function ConfigureStore() {
    const store = createStore(rootReducer);
    return store;
}