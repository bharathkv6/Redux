import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: [],
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat([{ id: new Date(), value: action.value }])
            }
        case actionTypes.DELETE_STORED_RESULT:
            const updatedArr = state.results.filter(item => item.id !== action.resultElId);
            return {
                ...state,
                results: updatedArr,
            }
    }
    return state;
}