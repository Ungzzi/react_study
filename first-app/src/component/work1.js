import React from 'react';
import '../App.css';

function Work1(props) {
    const name = '흰둥이';
    const animal = '댕댕';
    let a = 100;
    let b = 1;
    const title = 'React Practice'
    return (
        <>
            <div>Q1.</div>
            <div>
                이것은 div입니다
                <h3>이것은 div 안에 있는 h3태그 입니다</h3>
            </div>

            <hr />
            <div>Q2.</div>
            <div>
                제 반려동물의 이름은 {name} 입니다.
                <br />
                {name}는 {animal}입니다.
            </div>

            <hr />
            <div>Q3.</div>
            <div>
                3 + 5 = 8 {3 + 5 == 8 ? (<div>정답입니다!</div>) : (<div>오답입니다!</div>)}
            </div>

            <hr />
            <div>Q4.</div>
            <div>
                a = {a}, b = {b} 일 때 무엇이 더 큰가요?
                {a > b && <div>a는 b보다 큽니다.</div>}
            </div>

            <hr />
            <div>Q5.</div>
            <div className='wrap'>
                <div className='test'>{title}</div>
                아이디 : <input /> <br />
                비밀번호 : <input />
            </div>

            <hr />
            <div>Q6.</div>
            <div className='wrap6'>
                <div className='red'></div>
                <div className='orange'></div>
                <div className='yellow'></div>
                <div className='green'></div>
                <div className='blue'></div>
                <div className='navy'></div>
                <div className='purple'></div>
            </div>
        </>
    );
}

export default Work1;