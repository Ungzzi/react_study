import React from 'react';
import { useParams, useLocation, useSearchParams, useNavigate } from "react-router-dom";

function Product(props) {
    const { id, name } = useParams();
    const param = useParams(); // param.id
    const location = useLocation();
    let navigate = useNavigate();
    console.log(location.search);
    console.log(location.hash);

    let [searchParam, setSearchParam] = useSearchParams();
    console.log(searchParam.get("productName"));
    return (
        <h1>
            {id}번 상품페이지입니다.
            <br />
            {param.id}번 상품페이지입니다.
            <br />
            이름 : {name}
            <br />
            상품명 : {location.search}
            <br />
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate(1)}>앞으로가기</button>
        </h1>
    );
}

export default Product;