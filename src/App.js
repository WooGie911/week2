// src/App.js

import React from "react";
import { useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const counterStore = useSelector((state) => state); // 추가해주세요.
  console.log(counterStore); // 스토어를 조회해볼까요?

  return <div></div>;
};

export default App;
