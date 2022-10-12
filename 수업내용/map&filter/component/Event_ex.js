import React, { useState } from 'react';

function Event_ex(props) {
    let [nameValue, setName] = useState('');
    let [emailValue, setEmail] = useState('');
    let [userList, setList] = useState([
        {
            id: 1,
            name: "아무개",
            email: "example@naver.com",
        }
    ])
    return (
        <div>
            <input type="text" placeholder='이름' onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder='이메일' onChange={(e) => { setEmail(e.target.value) }} />
            <button onClick={() => {
                setList(userList.concat({ id: userList.length + 1, name: nameValue, email: emailValue }));
            }}>등록</button>
            <ul>
                {userList.map((value) => {
                    return <li key={value.id} onDoubleClick={() => {
                        let newList = userList.filter(value2 => value2.id !== value.id);
                        setList(newList);
                    }}>{value.name}: {value.email}</li>
                })}

            </ul>
        </div>

    );
}

export default Event_ex;