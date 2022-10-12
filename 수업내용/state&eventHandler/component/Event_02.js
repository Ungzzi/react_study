import React, { useState } from 'react';

function Event_02(props) {
    const [text, setText] = useState("검정색 글씨");
    const [my_color, setColor] = useState("black");
    const red = () => {
        setText("빨강색 글씨");
        setColor("red");
    };
    const blue = () => {
        setText("파랑색 글씨");
        setColor("blue");
    };


    return (
        <div>
            <h1 style={{ color: `${my_color}` }}>{text}</h1>
            <button onClick={red}>빨간색</button>
            <button onClick={blue}>파란색</button>
        </div >
    );
}

export default Event_02;