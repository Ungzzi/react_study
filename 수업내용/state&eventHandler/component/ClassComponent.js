import React, { Component } from 'react';

class ClassComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         text: "안녕안녕"
    //     }
    // }
    state = {
        number: 0,
        text: "안녕"
    }
    render() {
        let { number, text } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <div>{text}</div>
                <button onClick={() => { this.setState({ number: 1 }); }}>button</button>

                <button onClick={() => { this.setState({ number: number + 1 }); }}>Add</button>

                {/* 동시에 실행돼서 1씩 카운트 올라감 */}
                <button onClick={() => {

                    this.setState({ number: this.state.number + 1 })
                }}>Add</button>

                <button onClick={() => {
                    this.setState({ number: number + 1 })
                    console.log("1")
                    this.setState({ number: number + 1 })
                    console.log("2")
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    // this.setState({ number: number + 1 })
                }}>설정</button>
            </div>
        );
    }
}

export default ClassComponent;