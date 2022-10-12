import React, { Component } from 'react';

class RefTest extends Component {

    constructor(props) {
        super(props);
        this.box2 = React.createRef();
    }

    ref1 = () => {
        console.log(this.box);
    }
    ref2 = () => {
        console.log(this.box2.current);
        this.input.focus();
    }

    render() {

        return (
            <div>
                <div ref={(ref) => this.box = ref}>box1</div>
                <button onClick={this.ref1}>버튼</button>

                <div ref={this.box2}>box2</div>
                <button onClick={this.ref2}>버튼</button>
                <input ref={(ref) => this.input = ref} type="text" />
            </div>
        );
    }
}

export default RefTest;