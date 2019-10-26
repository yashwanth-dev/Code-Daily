import {createStore, combineReducers} from "redux";
import {LoginReducer} from './LoginState/reducers';


const rootReducer = combineReducers({
    login: LoginReducer
})

const ConfigureStore = () => {
    const store = createStore(rootReducer);
    return store;
}

export default ConfigureStore;