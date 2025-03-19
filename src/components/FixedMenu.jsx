import React from "react";
import styles from "../assets/styles/FixedMenu.module.scss";
import Kakaotalk from "../assets/images/Kakaotalk.png";
import CallTwo from "../assets/images/CallTwo.png";

function FixedMenu () {
    return(
        <div className={styles.fixedMenu}>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={Kakaotalk} alt="카독 문의" className={styles.katalkImg}/>
            </a>
            <a href="070-0000-0000">
                <img src={CallTwo} alt="전화 문의" className={styles.callImg}/>
            </a>
        </div>
    );
}

export default FixedMenu;