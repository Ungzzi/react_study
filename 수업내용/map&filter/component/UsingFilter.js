import React, { useState } from 'react';

function UsingFilter(props) {
    let [list, setList] = useState([
        { id: 1, alpha: "a" },
        { id: 2, alpha: "b" },
        { id: 3, alpha: "c" },
        { id: 4, alpha: "d" },
        { id: 5, alpha: "e" },
    ])
    let [inputValue, setInput] = useState('');
    let [inputID, setID] = useState(list.length + 1);
    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={() => {
                setList(list.concat({ id: inputID, alpha: inputValue }));
                setID(inputID + 1);
                setInput('');
                console.log(list);
            }}>추가</button>
            <ul>
                {list.map((value) => {
                    return <li key={value.id} onDoubleClick={() => {
                        let newList = list.filter(value2 => value2.id !== value.id);
                        setList(newList);
                    }}>{value.alpha}</li>
                })}

            </ul>
        </>
    );
}
// function UsingFilter(props) {
//     let animals = ['dog', 'turtle', 'rabbit'];
//     // let newAnimals = animals.filter((animal) => { return animal.length > 3 });
//     let newAnimals = animals.filter(animal => animal.length > 3);
//     console.log(newAnimals);
//     return (
//         <div>

//         </div>
//     );
// }

export default UsingFilter;