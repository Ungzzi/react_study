import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product2(props) {
    const { id } = useParams();
    let navigate = useNavigate();
    return (
        <div>
            <h1>
                {id}번 상품페이지입니다.
                <br />
                <button onClick={() => navigate(-1)}>뒤로가기</button>
                <button onClick={() => navigate(1)}>앞으로가기</button>
            </h1>

        </div>
    );
}

export default Product2;