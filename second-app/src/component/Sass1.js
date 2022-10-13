import React from 'react';
import grass from './grass.png';
import './App.scss';

function Saas1(props) {
    return (
        <>
            <div className='SaasTest'>
                <div id='eye1' className='eye1'></div>
                <div id='eye2' className='eye2'></div>
                <div id="body1" className='body1'></div>
                <div id="body2" className='body2'></div>
                <div id="body3" className='body3'></div>
                <div id="body4" className='body4'></div>
                <div id="body5" className='body5'></div>
                <img src={grass} alt="" className='grass1' />
                <img src={grass} alt="" className='grass2' />
            </div>
        </>
    );
}

export default Saas1;
