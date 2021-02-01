import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COUNTER: return { ...state, counter: state.counter + action.value }
        case actionTypes.SUBTRACT_COUNTER: return { ...state, counter: state.counter - action.value }
        case actionTypes.INCREMENT_COUNTER: return { ...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT_COUNTER: return { ...state, counter: state.counter - 1 }
    }
    return state;
}