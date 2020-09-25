import { createAction, handleActions } from 'redux-actions';

// action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creator
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initial state
// 상태는 꼭 객체일 필요가 없다.
// 숫자도 작동함.
const initialState = 0;

// reducer function
const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    initialState,
);

export default counter;