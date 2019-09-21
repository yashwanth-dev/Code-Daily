const redux = require('redux');
const createStore = redux.createStore;

// Initial State
const intialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = intialState, action) => {
    if (action.type === "INC_Counter") {
        return {
            ...state,
            counter: action.counter + 1
        }
    } else if (action.type === "Add_Counter") {
        return {
            ...state,
            counter: action.counter + action.value
        }
    }
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscriptions
store.subscribe(() => {
    console.log('[Subscriptions]', store.getState());
})

// Dispatching actions
store.dispatch({ type: 'INC_Counter' });
store.dispatch({ type: 'Add_Counter', value: 10 });
console.log(store.getState());
