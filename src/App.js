// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.
import { useDispatch } from "react-redux"; // import 해주세요.
import counter from "./redux/modules/counter";
import { minusNUM, plusNUM } from "./redux/modules/counter";
import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch(); // dispatch 생성
  // const gnumber = useSelector((state) => state.counter.number); // 추가해주세요.

  const [input, setInput] = useState();
  const todoList = useSelector((state) => state.counter.id);
  console.log(todoList);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNum(+value);
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
  };
  // 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
  // input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  // console.log(num);
  // console.log(todoList.id);
  // console.log(counter.id);
  // console.log(counter);

  // const counterStore = useSelector((state) => state); // 추가해주세요.
  // console.log(counterStore); // 스토어를 조회해볼까요?

  // const onChangeHandler2 = (e) => {
  //   const { name, value } = e.target;
  //   setInput(e.target.value);
  // };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (input.trim() === "") return;
  //   setTodo([...todo, input]);
  //   setInput("");
  //   console.log(todo);
  // };

  return (
    <div>
      <div>
        {/* {gnumber} */}

        <input type="number" onChange={onChangeHandler} />
        <button
          // 이벤트 핸들러 추가
          onClick={() => {
            // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
            dispatch(plusNUM(num));
            // dispatch({ type: "PLUS_ONE" });
          }}
        >
          +
        </button>

        <button
          // 이벤트 핸들러 추가
          onClick={() => {
            // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
            dispatch(minusNUM(num));
            // dispatch({ type: "MINUS_ONE" });
          }}
        >
          -
        </button>
        {todoList}
      </div>
      {/* 
      <form onSubmit={onSubmitHandler}>
        <div className="centered">
          <div className="input">
            <input
              type="text"
              name="input"
              className="input"
              value={input}
              onChange={onChangeHandler2}
            ></input>

            <button type="submit" className="add-button">
              추가하기
            </button>
          </div>
        </div>
      </form> */}

      {/* <div className="centered">
        <h1>Todo List</h1>
        {todoList}
      </div> */}
      {/* <div className="list-wrapper">
        {todo.map((todo1) => {
          console.log(todo1);
          return (
            <div className="todo-container">
              <div>{todo1}</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default App;
