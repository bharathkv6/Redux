import { counterReducer } from './counter';
import { resultReducer } from './result';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    counterReducer: counterReducer,
    resultReducer: resultReducer,
});

export default reducer;