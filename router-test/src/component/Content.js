import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product2 from './Product2';
import Main2 from './Main2';

function Content(props) {
    return (
        <Routes>
            <Route path="/" element={<Main2 />}></Route>
            <Route path='/product/:id' element={<Product2 />}></Route>
        </Routes>
    );
}

export default Content;