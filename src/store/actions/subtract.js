import { SUBTRACT_COUNTER } from './actionTypes';

export const subtractCounter = (value) => ({
    type: SUBTRACT_COUNTER,
    value,
})