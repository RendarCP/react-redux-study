// 액션타입

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 타입 
export const setDiff = diff => ({
  type: SET_DIFF,
  diff
});

export const increase = () => ({
  type: INCREASE
});

export const decrease = () => ({
  type: DECREASE
});


// 초기상태
const initialstate = {
  number: 0,
  diff: 1
};

// 리듀서
export default function counter(state = initialstate, action){
  switch(action.type){
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    default:
      return state;
  }
}