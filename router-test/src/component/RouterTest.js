import React from 'react';
import Main from './Main';
import Product from './Product';
import NF404 from './NF404';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function RouterTest(props) {
    return (
        <BrowserRouter>
            <Link to='/' style={{ marginRight: `30px` }}>메인</Link>
            <Link to='/product' style={{ marginRight: `30px` }}>상품</Link>
            <Link to='/e'>이상한 페이지~</Link>
            <button type='button' onClick={() => {
            }}>버튼</button>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/product/:id/:name' element={<Product />}></Route>
                <Route path='*' element={<NF404 />}></Route>
            </Routes>
        </BrowserRouter >
    );
}

export default RouterTest;