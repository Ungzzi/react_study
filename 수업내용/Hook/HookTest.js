import React, { useEffect, useReducer, useState, useRef } from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { number: state.number + 1 }
        case 'DECREMENT':
            return { number: state.number - 1 }
        default:
            return state;
    }
}

function HookTest(props) {
    // let [name, setName] = useState('');
    // let input = useRef(null);
    // let [pw, setPw] = useState('');


    let [number, dispatch] = useReducer(reducer, { number: 0 });

    // useEffect(() => {
    //     console.log("mount!");
    //     var num = 0;
    //     const time = setInterval(() => {
    //         console.log("time", num++);
    //     }, 1000);
    //     console.log(input.current);
    //     return () => {
    //         console.log("unmount!");
    //         clearInterval(time);

    //     }

    // }, []);

    // useEffect(() => {
    // }, [name]);


    return (
        <div>
            {/* <div>{name}</div>
            <div>{pw}</div> */}
            {/* <input ref={input} onChange={(e) => { setName(e.target.value) }}></input>
            <input onChange={(e) => { setPw(e.target.value) }}></input> */}
            <div>{number.number}</div>
            <button onClick={() => { dispatch({ type: `INCREMENT` }) }}>+1</button>
            <button onClick={() => { dispatch({ type: `DECREMENT` }) }}>-1</button>
        </div>
    );
}

export default HookTest;
