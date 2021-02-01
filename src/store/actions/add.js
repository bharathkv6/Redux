import { ADD_COUNTER } from './actionTypes';

export const addCounter = (value) => ({
    type: ADD_COUNTER,
    value,
})