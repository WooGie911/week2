// src/App.js

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import counter, { minusNUM, plusNUM } from "./redux/modules/counter";
import { useEffect, useState } from "react";
import todo, { inputText, userRevise, deleteData } from "./redux/modules/todo";

const App = () => {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const gnumber = useSelector((state) => state.counter.number);

  const onChangeHandlerInCounter = (e) => {
    const { value } = e.target;
    setNum(+value);
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
  };
  const getRandom = () => Math.random();
  const inputId = getRandom();
  const [input, setInput] = useState(initialState);

  const todoList = useSelector((state) => state.todo.user);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const onChangeHandlerInTodo = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.body.trim() === "")
      return alert("제목과 내용을 모두 입력 하세요");
    const s = { ...input, id: inputId };
    dispatch(inputText(s));
    setInput(initialState);
  };

  const onDeleteHanlder = (todoId) => {
    dispatch(deleteData(todoId));
  };
  const onEditHandler = (todoId) => {
    dispatch(userRevise(todoId));
  };
  return (
    <div>
      <div>
        {gnumber}

        <input type="number" onChange={onChangeHandlerInCounter} />
        <button
          onClick={() => {
            dispatch(plusNUM(num));
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch(minusNUM(num));
          }}
        >
          -
        </button>
      </div>

      <div className="centered">
        <div className="input">
          <label className="input-Title">제목</label>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInTodo}
          ></input>
          <label className="input-Body">내용</label>
          <input
            type="text"
            name="body"
            className="input"
            value={input.body || ""}
            onChange={onChangeHandlerInTodo}
          ></input>

          <button className="add-button" onClick={onSubmitHandler}>
            submit
          </button>
        </div>
      </div>

      <div className="centered">
        <h1>Todo List</h1>
      </div>
      <div className="list-wrapper">
        {todoList.map((todo1) => {
          // console.log(todo1);
          return (
            <div className="todo-container">
              <div>
                <div>{todo1.id}</div>
                <h2 className="todo-title">{todo1.title}</h2>
                <div>{todo1.body}</div>
              </div>

              <div className="button-set">
                <button
                  className="todo-delete-button button"
                  onClick={() => onDeleteHanlder(todo1.id)}
                >
                  삭제하기
                </button>
                <button
                  className="todo-complete-button button"
                  onClick={() => onEditHandler(todo1.id)}
                >
                  {todo1.isDone ? "취소" : "완료"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
