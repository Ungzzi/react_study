import React from 'react';
import t from './t.jpeg';


function Book(props) {
    let my_style = {
        backgroundColor: 'antiquewhite',
        width: '600px',
        textAlign: 'center'
    }
    let content_style = {
        fontSize: '20px',
        textAlign: 'left',
        fontWeight: 'bold'
    }
    let img_style = {
        width: '300px',
        height: 'auto'
    }
    let { title, writer, price, category } = props;
    return (
        <div style={my_style}>
            <h1>{title}</h1>
            <img style={img_style} src={t}></img>
            <h2>오늘부로 저는..</h2>
            <div>
                <div style={content_style}>저자 : {writer}</div>
                <div style={content_style}>가격 : {price}원</div>
                <div style={content_style}>구분 : {category}</div>
            </div>

        </div>
    );
}

export default Book;