import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Func extends Component {
    render() {
        let { text, valid, test } = this.props;
        return (
            <div>
                <h1>{text}</h1>
                <button onClick={() => {
                    test(valid);
                }}>콘솔 메세지</button>
            </div>
        );
    }
    static defaultProps = {
        text: "이건 기본 text props입니다."
    }

    static propTypes = {
        text: PropTypes.string
    }

}

export default Func;