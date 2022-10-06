import React, { Component } from 'react'
import './App.css';
import Work1 from './component/work1';
import Work2 from './component/work2';
import FunctionComponent from './component/FunctionComponent';
import ClassComponent from './component/ClassComponent';
import Test from './component/Test';
import Test2 from './component/Test2';
import Food from './component/Food';
import Book from './component/Book';
import Func from './component/Func';

function App() {
  const test = (data) => {
    console.log(data);
  }
  return (
    <div>
      {/* <Work1 /> */}
      {/* <Work2 /> */}
      {/* <FunctionComponent title={1} name="정지웅">I'm FunctionComponent Props Children</FunctionComponent> */}
      {/* <ClassComponent title="C-Component" name="정지웅2">I'm ClassComponent Props Children</ClassComponent> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <Food></Food> */}
      {/* <Book title="직장인 베스트셀러" writer="김퇴사" price={13500} category="자기계발서" ></Book> */}
      <Func text="App 컴포넌트에서 넘겨준 text props입니다." valid="콘솔 띄우기 성공!" test={test}></Func>
    </div>
  );
}

export default App;
