const redux = require('redux');
const createStore = redux.createStore;

// Initial State
const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_Counter") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "Add_Counter") {
        return {
            ...state,
            counter: state.counter + 10
        }
    }


    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

// Dispatching Action
store.dispatch({ type: "INC_Counter" });
store.dispatch({ type: "Add_Counter", value: 10 });
console.log(store.getState());

