import React, { useRef, useMemo, useState } from 'react';

function HookUseMemo(props) {
    let [list, setState] = useState([]);
    let [text, setText] = useState('');

    let addNumber = () => {
        let newList = list.concat(Number(inputNumber.current.value));
        setState(newList);
    }

    let getAvg = () => {
        console.log(list);
        if (list.length === 0) return 0;
        const sum = list.reduce((a, b) => a + b);
        return sum / list.length;
    }

    let inputNumber = useRef(null);
    let avg = useMemo(() => { return getAvg() }, [list]);
    return (
        <>
            <div>
                <input ref={inputNumber} type="text" onChange={(e) => { setText(e.target.value) }} />
                <button onClick={(addNumber)}>추가</button>
            </div>
            {avg}
            <ul>
                {list.map((value, idx) => {
                    return <li key={idx}>{value}</li>
                })}
            </ul>
        </>
    );
}

export default HookUseMemo;