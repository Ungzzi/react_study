import React from 'react';
import grass from '../grass.png';
import '../App.css';


function Work2(props) {
    return (
        <>
            <div>
                <div id='eye1'></div>
                <div id='eye2'></div>
                <div id="body1"></div>
                <div id="body2"></div>
                <div id="body3"></div>
                <div id="body4"></div>
                <div id="body5"></div>
                <img src={grass} alt="" className="grass1" />
                <img src={grass} alt="" className="grass2" />
            </div>
        </>
    );
}

export default Work2;