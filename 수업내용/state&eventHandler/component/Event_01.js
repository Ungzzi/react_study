import React, { Component } from 'react';

class Event_01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "hello world!"
        }

    }

    changeText = () => {
        this.setState({ text: "goobye world!" })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.changeText}>변해라</button>
            </div>
        );
    }
}

export default Event_01;