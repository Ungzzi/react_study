import React, { useRef } from 'react';

function RefTestF(props) {
    const divRef = React.useRef();
    const valueRef = React.useRef(90);
    return (
        <div>
            값 : {valueRef.current}
            <div id="divR" ref={divRef}>
                App, hereq
            </div>
            <button onClick={() => (valueRef.current = 88)}> 증가 </button>
        </div>
    );
}

export default RefTestF;