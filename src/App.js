// src/App.js

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

let number = 3;

const App = () => {
  const n = useSelector((s) => {
    console.log(s);
    return s;
  });

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.body.trim() === "") return;
    setTodo([...todo, { ...input, id: number }]);
    setInput(initialState);
    number++;
    console.log(todo);
  };

  return (
    <div className="layout">
      <form onSubmit={onSubmitHandler}>
        <div className="centered">
          <div className="input">
            <label className="input-Text">제목</label>
            <input
              type="text"
              name="title"
              className="input"
              value={input.title}
              onChange={onChangeHandler}
            ></input>
            <label class="input-Text">내용</label>
            <input
              type="text"
              name="body"
              className="input"
              value={input.body}
              onChange={onChangeHandler}
            ></input>

            <button type="submit" className="add-button">
              추가하기
            </button>
          </div>
        </div>
      </form>

      <div className="centered">
        <h1>Todo List</h1>
      </div>

      <div className="list-wrapper">
        {todo.map((todo1) => {
          console.log(todo1);
          return (
            <div className="todo-container">
              <div key={todo.id}>
                <div className="totoTitle">{todo1.title}</div>
                <div className="todoBody">{todo1.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { minusNUM, plusNUM } from "./redux/modules/counter";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const dispatch = useDispatch(); // dispatch 생성
//   const gnumber = useSelector((state) => state.counter.number);

//   const n = useSelector((s) => {
//     console.log(s);
//     return s;
//   });

//   const onChangeHandler = (e) => {
//     const { value } = e.target;
//     setNum(+value);
//     // event.target.value는 문자열 입니다.
//     // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
//   };

//   console.log(num);

//   return (
//     <div>
//       {gnumber}
//       <input type="number" onChange={onChangeHandler} />
//       <button
//         onClick={() => {
//           dispatch(plusNUM(num));
//           // dispatch({ type: "PLUS_ONE" });
//         }}
//       >
//         +
//       </button>

//       <button
//         onClick={() => {
//           dispatch(minusNUM(num));
//           // dispatch({ type: "MINUS_ONE" });
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // 4. Action Creator를 import 합니다.
// import { addNumber } from "./redux/modules/counter";
// import { subNumber } from "./redux/modules/counter";

// const App = () => {
//   // 1. dispatch를 사용하기 위해 선언해줍니다.
//   const dispatch = useDispatch();
//   const [number, setNumber] = useState(0);
//   const globalNumber = useSelector((state) => state.counter.number);
//   console.log(globalNumber);

//   const n = useSelector((s) => {
//     console.log(s);
//     return s;
//   });

//   const onChangeHandler = (evnet) => {
//     const { value } = evnet.target;
//     setNumber(+value);
//   };

//   // 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러를 만들어줍니다.
//   const onClickAddNumberHandler = () => {
//     // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
//     dispatch(addNumber(number));
//   };

//   const onClickSubNumberHandler = () => {
//     // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
//     dispatch(subNumber(number));
//   };

//   return (
//     <div>
//       <div>{globalNumber}</div>
//       <input type="number" onChange={onChangeHandler} />
//       {/* 3. 더하기 버튼 이벤트핸들러를 연결해줍니다. */}
//       <button onClick={onClickAddNumberHandler}>더하기</button>
//       <button onClick={onClickSubNumberHandler}>빼기</button>
//     </div>
//   );
// };

// export default App;
