import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const styles = {
        marginRight: "20px"
    }
    return (
        <div style={{ backgroundColor: "skyblue", width: "100%" }}>
            <h3>navbar입니다</h3>
            <Link to="" style={styles}>메인</Link>
            <Link to="/product/1" style={styles}>1번 상품</Link>
            <Link to="/product/2" style={styles}>2번 상품</Link>
            <Link to="/product/3" style={styles}>3번 상품</Link>
        </div>
    );
}

export default Nav;