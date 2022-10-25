import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './store';


const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// let initialState = {
//   number: 0
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREASE':
//       return {
//         number: state.number + 1
//       }
//     case 'DECREASE':
//       return {
//         number: state.number - 1
//       }
//     default:
//       return state;
//   }
// }

// const store = configureStore({ reducer: reducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals