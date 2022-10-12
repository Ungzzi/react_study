import React, { Component } from 'react';

class EventHandlerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        this.changeNubmer2 = this.changeNubmer2.bind(this);
    }

    changeNubmer() {
        this.setState({ number: this.state.number + 1 })
    }
    changeNubmer2() {
        this.setState({ number: this.state.number + 1 })
    }
    changeNubmer3 = () => {
        this.setState({ number: this.state.number + 1 })
    }
    changeNubmer4 = (e) => {
        console.log(e.target);
        console.log(e.target.innerText);
        this.setState({ number: this.state.number + 1 })
    }

    printConsole() {
        console.log("안녕");
    }

    printConsole_param(name) {
        console.log(name, "안녕");
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.printConsole}>안녕버튼</button>
                <button onClick={() => { this.printConsole_param("안녕") }}>안녕버튼2</button>
                <button onClick={this.printConsole_param.bind(this, "안녕")}>안녕버튼3</button>
                <button onClick={this.changeNubmer.bind(this)}>숫자버튼</button>
                <button onClick={this.changeNubmer2}>숫자버튼2</button>
                <button onClick={this.changeNubmer3}>숫자버튼3</button>
                <button onClick={this.changeNubmer4}>숫자버튼4</button>
            </div>
        );
    }
}

export default EventHandlerClass;