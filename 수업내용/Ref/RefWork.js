import React, { Component } from 'react';
import './RefWork.css'

class RefWork extends Component {
    moveBottom = () => {
        this.box.scrollTop = this.box.scrollHeight;
    }
    moveTop = () => {
        this.box.scrollTop = 0
    }
    render() {

        return (
            <div>
                <div className='div1' ref={(ref) => this.box = ref}>
                    <div className='div2' ></div>
                </div>
                <button onClick={this.moveBottom}>맨밑으로</button>
                <button onClick={this.moveTop}>맨위로</button>
            </div>
        );
    }
}

export default RefWork;