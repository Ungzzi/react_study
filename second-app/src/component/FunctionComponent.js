import React, { useState } from 'react';

function FunctionComponent(props) {

    // const [message, setMessage] = useState("");
    // const onClickEnter = () => { setMessage("hi") };
    // const onClickLeave = () => { setMessage("bye") };

    const [number, setNumber] = useState(0);
    const onClickAdd = () => { setNumber(number + 1) };
    return (
        <div>

            {/* <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button> */}
            {/* <h1>{message}</h1> */}

            <button onClick={onClickAdd}>cnt+1</button>
            <h1>{number}</h1>
        </div>
    );
}

export default FunctionComponent;