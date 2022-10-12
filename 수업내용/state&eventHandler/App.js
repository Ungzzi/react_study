import React from 'react';
import './App.css';
// import ClassComponent from './component/ClassComponent';
// import FunctionComponent from './component/FunctionComponent';
// import State_01 from './component/State_01';
// import EventHandlerClass from './component/EventHandlerClass';
// import Event_01 from './component/Event_01';
// import Event_02 from './component/Event_02';
// import Event_03 from './component/Event_03';

function App() {
  let list = ['a', 'b', 'c', 'd', 'e'];
  let items = list.map((value, id, arr) => {
    console.log("value : ", value);
    console.log("id : ", id);
    return value + id
  })
  console.log(items);
  return (
    <>
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <State_01></State_01> */}
      {/* <EventHandlerClass></EventHandlerClass> */}
      {/* <Event_01></Event_01> */}
      {/* <Event_02></Event_02> */}
      {/* <Event_03></Event_03> */}
    </>
  );
}

export default App;
