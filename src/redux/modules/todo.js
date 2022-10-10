const INPUT_TEXT = "INPUT_TEXT";

export const inputText = (payload) => {
  return {
    type: INPUT_TEXT,
    text: payload, //payload   key와 value 가 같으면 축약가능
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

    // //수정(뒤집어써짐)
    //       case INPUT_TEXT:
    //       console.log(state);
    //       return {
    //         ...state,
    //         user: action.text,
    //         // id: action.text,
    //         // title: action.text,
    //         // body: action.text,
    //       };

    default:
      return state;
  }
};
// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
