import React from 'react';
import styles from "./test.module.css";
import grass from './grass.png';
import '../App.css';


function CssModuleTest(props) {
    return (
        <>
            <div>
                <div id='eye1' className={`${styles.eye1}`}></div>
                <div id='eye2' className={`${styles.eye2}`}></div>
                <div id="body1" className={`${styles.body1}`}></div>
                <div id="body2" className={`${styles.body2}`}></div>
                <div id="body3" className={`${styles.body3}`}></div>
                <div id="body4" className={`${styles.body4}`}></div>
                <div id="body5" className={`${styles.body5}`}></div>
                <img src={grass} alt="" className={`${styles.grass1}`} />
                <img src={grass} alt="" className={`${styles.grass2}`} />
            </div>
        </>
    );
}

export default CssModuleTest;


            // <div className={`${styles.test} ${styles.txt}`}>안녕?</div>
