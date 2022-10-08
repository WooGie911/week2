// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.
import { useDispatch } from "react-redux"; // import 해주세요.
import { minusNUM, plusNUM } from "./redux/modules/counter";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch(); // dispatch 생성
  const gnumber = useSelector((state) => state.counter.number); // 추가해주세요.

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNum(+value);
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
  };
  // 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
  // input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!
  console.log(num);

  const onClickAddNumberHandler = () => {
    // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(plusNUM(num));
  };

  const counterStore = useSelector((state) => state); // 추가해주세요.
  console.log(counterStore); // 스토어를 조회해볼까요?

  return (
    <div>
      {gnumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      {/* <button
        // 이벤트 핸들러 추가
        onClick={() => {
          // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch(plusNUM(num));
          // dispatch({ type: "PLUS_ONE" });
        }}
      >
        +
      </button> */}

      {/* <button
        // 이벤트 핸들러 추가
        onClick={() => {
          // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch(minusNUM(num));
          // dispatch({ type: "MINUS_ONE" });
        }}
      >
        -
      </button> */}
    </div>
  );
};

export default App;
