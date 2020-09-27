import { createStore } from 'redux';

// redux 상태 초기값 설정 
const initialState = {
  counter: 0,
  text: '',
  list: []
};


// action type (대문자로 작성)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action 생성함수 (소문자로 작성)

// function 타입
// function increase() {
//   return{
//     type: INCREASE,
//   }
// }

// 화살표 함수 타입
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text =>({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});


// 리듀서 함수
function reducer(state = initialState, action) {
  switch(action.type){
    case INCREASE:
      return{
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return{
        ...state,
        counter: state.counter - 1,
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default: 
      return state;
  }
}

const store = createStore(reducer); // 스토어 생성 
console.log(store.getState());

// 구독 및 디스패치 

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
//unsubscribe(); // 구독 취소 

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요!"));
store.dispatch(addToList({ id: 1, text: '와우' }));


window.store = store