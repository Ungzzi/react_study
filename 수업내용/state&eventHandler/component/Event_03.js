import React, { useState } from 'react';

function Event_03(props) {
    const [bt, setBt] = useState("사라져라");
    const [my_display, setDisplay] = useState("block");
    // const appear = () => {
    //     setText("빨강색 글씨");
    //     s("red");
    // };
    const cg = () => {
        setBt("보여라");
        if (my_display == 'none') {
            setBt("사라져라");
            setDisplay("block");
        }
        else {
            setBt("보여라");
            setDisplay("none");
        }
    };


    return (
        <div>
            <h1 style={{ display: `${my_display}` }}>안녕</h1>
            <button onClick={cg}>{bt}</button>
        </div >
    );
}

export default Event_03;