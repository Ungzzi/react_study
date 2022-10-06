import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    render() {
        let { title, name, age } = this.props;  // 구조 분해 할당
        return (
            <>
                <hr />
                <h1>
                    클래스 컴포넌트 테스트
                </h1>
                <h2>{this.props.children}</h2>
                <div>제목 : {this.props.title}</div>
                <div>이름 : {this.props.name}</div>
                <div>나이 : {this.props.age}</div>
                <br />
                <h2>구조 분해 할당</h2>
                <div>제목2 : {title}</div>
                <div>이름2 : {name}</div>
                <div>나이2 : {age}</div>
            </>
        );
    }

    static defaultProps = {
        d: 'd_props'
    }

    static propTypes = {
        d: PropTypes.string
    }
}

ClassComponent.defaultProps = {
    age: '26'
}

ClassComponent.propTypes = {

}

export default ClassComponent;