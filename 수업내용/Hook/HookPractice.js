import React, { useEffect, useState, useRef } from 'react';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function HookPractice(props) {
    let [w, setW] = useState(window.innerWidth);
    let [c, setC] = useState({ backgroundColor: 'white' });
    let box = useRef(null);

    useEffect(() => {
        console.log("mount!");
        var num = 0;
        const time = setInterval(() => {
            console.log("time", num++);
        }, 1000);
        return () => {
            console.log("unmount!");
            clearInterval(time);

        }

    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth);
        })
    })

    useEffect(() => {
        let cc = getRandomColor();
        setC({ backgroundColor: cc });
    }, [w])
    return (
        <div style={c} ref={box} >
            width가 변할 때마다 배경 색상이 바뀌어요.
            width : {w}
            <br></br>
        </div>
    );
}

export default HookPractice;