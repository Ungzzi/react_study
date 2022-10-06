import React from 'react';
import PropTypes from 'prop-types';

// function FunctionComponent(props) {
//     return (
//         <div>
//             hello
//         </div>
//     );
// }

const FunctionComponent = (props) => {
    let { title, name, age } = props;   // 구조분해할당
    return (
        <>
            <h1>
                함수 컴포넌트 테스트
            </h1>
            <h2>{props.children}</h2>
            <div>제목 : {props.title}</div>
            <div>이름 : {props.name}</div>
            <div>나이 : {props.age}</div>
            <br />
            <h2>구조분해할당</h2>
            <div>제목2 : {title}</div>
            <div>이름2 : {name}</div>
            <div>나이2 : {age}</div>
        </>
    );
}

FunctionComponent.defaultProps = {
    age: '26'
}

FunctionComponent.propTypes = {
    title: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.func
}

export default FunctionComponent;