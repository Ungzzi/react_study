import React from 'react';
import PropTypes from 'prop-types';
import mak from './mak.jpeg';

function Food(props) {
    let { food } = props;
    return (
        <>
            <h1>
                {food} 먹고싶다...😇
            </h1>
            <img src={mak}></img>
        </>
    );
}

Food.defaultProps = {
    food: '막창'
}

export default Food;