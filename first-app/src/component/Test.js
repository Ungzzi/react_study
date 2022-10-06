// import React, { Component } from 'react';

// class Test extends Component {
//     render() {
//         const name = '지웅';
// const my_style = {
//     backgroundColor: 'blue',
//     color: 'orange',
//     fontSize: '50px',
//     padding: '10px',
// };
//         return (
//             <div style={my_style}>
//                 {name}
//             </div>
//         );
//     }
// }

// export default Test;

import React from 'react';

function Test(props) {
    const name = '지웅(함수형)';
    const my_style = {
        backgroundColor: 'blue',
        color: 'orange',
        fontSize: '50px',
        padding: '10px',
    };
    return (
        <div style={my_style}>
            {name}
        </div>
    );
}

export default Test;