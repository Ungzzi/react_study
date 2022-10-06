import React, { Component } from 'react';
import lettuce from './test.png';

// class Test2 extends Component {
//     render() {
// const font_style = {
//     color: 'orange',
//     fontSize: '40px',
//     marginTop: '20px',
// }
//         return (
//             <div style={font_style}>
//                 <h2>안녕하세요</h2>
//                 <img src={lettuce} />
//             </div>
//         );
//     }
// }

// export default Test2;

function Test2(props) {
    const font_style = {
        color: 'orange',
        fontSize: '40px',
        marginTop: '20px',
    }
    return (
        <div style={font_style}>
            <h2>안녕하세요(함수형)</h2>
            <img src={lettuce} />
        </div>
    );
}

export default Test2;