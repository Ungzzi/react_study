import './App.css';
// import { useState } from 'react';
import { useSelector } from "react-redux";
import { Box1Container } from './containers/BoxesContainer';

function App() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box-container">
      <h2>number: {number}</h2>
      <Box1Container></Box1Container>
    </div>
  );
}

// function Box1() {
//   return (
//     <>
//       <div>
//         <h2>box1 컴포넌트</h2>
//         <Box2></Box2>
//       </div>
//     </>
//   )
// }

// function Box2() {
//   return (
//     <>
//       <div>
//         <h2>box2 컴포넌트</h2>
//         <Box3></Box3>
//       </div>
//     </>
//   )
// }
// function Box3() {
//   return (
//     <>
//       <div>
//         <h2>box3 컴포넌트</h2>
//         <Box4></Box4>
//       </div>
//     </>
//   )
// }

// function Box4() {
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>
//         <h2>box4 컴포넌트</h2>
//         <button onClick={() => { dispatch({ type: 'INCREASE' }) }}>+1</button>
//         <button onClick={() => { dispatch({ type: 'DECREASE' }) }}>-1</button>
//       </div>
//     </>
//   )
// }

// WHY? Redux를 왜 사용하는가?
//  Ex) props 지옥
// function App() {
//   const [number, setNum] = useState(0);
//   return (
//     <div className="box-container">
//       <h2>number: {number}</h2>
//       <Box1 number={number} setNum={setNum}></Box1>
//     </div>
//   );
// }

// function Box1({ number, setNum }) {
//   return (
//     <>
//       <div>
//         <h2>box1 컴포넌트</h2>
//         <Box2 number={number} setNum={setNum}></Box2>
//       </div>
//     </>
//   )
// }

// function Box2({ number, setNum }) {
//   return (
//     <>
//       <div>
//         <h2>box2 컴포넌트</h2>
//         <Box3 number={number} setNum={setNum}></Box3>
//       </div>
//     </>
//   )
// }
// function Box3({ number, setNum }) {
//   return (
//     <>
//       <div>
//         <h2>box3 컴포넌트</h2>
//         <Box4 number={number} setNum={setNum}></Box4>
//       </div>
//     </>
//   )
// }

// function Box4({ number, setNum }) {
//   return (
//     <>
//       <div>
//         <h2>box4 컴포넌트</h2>
//         <button onClick={() => { setNum(number + 1) }}>+1</button>
//         <button onClick={() => { setNum(number - 1) }}>-1</button>
//       </div>
//     </>
//   )
// }


export default App;
