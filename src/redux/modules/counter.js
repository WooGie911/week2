// src/modules/counter.js

const PLUS_NUM = "PLUS_NUM";
const MINUS_NUM = "MINUS_NUM";

export const plusNUM = (payload) => {
  return {
    type: PLUS_NUM,
    payload: payload, // payload   key와 value 가 같으면 축약가능
  };
};

export const minusNUM = (payload) => {
  return {
    type: MINUS_NUM,
    payload: payload, //payload   key와 value 가 같으면 축약가능
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// reducer
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "PLUS_NUM":
      return {
        number: state.number + action.payload,
      };

    case "MINUS_NUM":
      return {
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;

// // Action Value
// const ADD_NUMBER = "ADD_NUMBER";
// const SUB_NUMBER = "SUB_NUMBER";

// // Action Creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload: payload,
//   };
// };

// export const subNumber = (payload) => {
//   return {
//     type: SUB_NUMBER,
//     payload: payload,
//   };
// };
// // Initial State
// const initialState = {
//   number: 0,
// };

// // 리듀서

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
//         number: state.number + action.payload,
//       };
//     case SUB_NUMBER:
//       return {
//         // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // export default reducer
// export default counter;
