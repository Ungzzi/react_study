import React, { useState } from 'react';

function UsingMap(props) {
    let [list, setList] = useState([
        { id: 1, alpha: "a" },
        { id: 2, alpha: "b" },
        { id: 3, alpha: "c" },
        { id: 4, alpha: "d" },
        { id: 5, alpha: "e" },
    ])
    let [inputValue, setInput] = useState('');
    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => {
                setList(list.concat({ id: list.length + 1, alpha: inputValue }));
                setInput('');
            }}>추가</button>
            <ul>
                {list.map((value) => {
                    return <li key={value.id}>{value.alpha}</li>
                })}

            </ul>
        </>
    );
}

export default UsingMap;