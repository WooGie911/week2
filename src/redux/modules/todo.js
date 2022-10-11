const INPUT_TEXT = "INPUT_TEXT";
const USER_REVISE = "USER_REVISE";
const DELETE_DATA = "DELETE_DATA";

export const inputText = (payload) => {
  return {
    type: INPUT_TEXT,
    text: payload, //payload   key와 value 가 같으면 축약가능
  };
};
export const userRevise = (payload) => {
  return {
    type: USER_REVISE,
    ididid: payload, //payload   key와 value 가 같으면 축약가능
  };
};
export const deleteData = (payload) => {
  return {
    type: DELETE_DATA,
    ididid: payload, //payload   key와 value 가 같으면 축약가능
  };
};

// 초기 상태값
const initialState = {
  user: [],
  // number: 0,
  // id: 0,
  // title: "",
  // body: "",
};
const todo = (state = initialState, action) => {
  // console.log(action.text);
  switch (action.type) {
    case INPUT_TEXT:
      state.user.push(action.text);
      console.log(state);
      return {
        ...state,
      };

    //수정(뒤집어써짐)
    // case USER_REVISE:
    //     if (array.id === action.ididid) {
    //   const newTodo = state.user.map((value,index,array) => {

    //       return {
    //         ...array,
    //         value[index]= isDone: !todo1.isDone,
    //       };
    //     } else {
    //       return { ...array };
    //     }
    //   });
    // return newTodo;

    case DELETE_DATA:
      state.user.map((value, index, array) => {
        if (array.id === action.ididid) {
          state.user.splice(index, 1);
        }
        return state;
      });

    default:
      return state;
  }
};
// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
