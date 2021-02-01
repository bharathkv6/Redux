import { STORE_RESULT } from './actionTypes';

export const storeResult = (result) => ({
    type: STORE_RESULT,
    value: result,
});