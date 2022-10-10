// src/redux/modules/config/configStore.js

// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import counter from "../modules/counter";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  counter: counter,
  todo: todo, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);
console.log(store);

export default store;
