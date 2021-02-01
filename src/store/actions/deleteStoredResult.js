import { DELETE_STORED_RESULT } from './actionTypes';

export const deleteStoredResult = (resultElId) => ({
    type: DELETE_STORED_RESULT,
    resultElId: resultElId,
})