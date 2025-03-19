import React from "react";
import { Link } from 'react-router-dom';
import styles from "../assets/styles/Header.module.scss";
import Foot from "../assets/images/Foot.png";

function Header() {
    return(
        <header className={styles.headerCon}>
            <div className={styles.header}>
                <nav className={styles.nav}>
                        <h1 className={styles.imgRow}>
                            <strong>바로네 펫샵</strong><img src={Foot} alt="바로네 펫샵 로고" className={styles.footImg}/>
                        </h1>
                    <ul className={styles.ul}>
                        <li><Link to="/#" className={styles.link}>로그인</Link></li>
                        <li><Link to="/#" className={styles.link}>회원가입</Link></li>
                        <li><Link to="/#" className={styles.link}>내 정보</Link></li>
                    </ul>
                </nav>
            </div>
            <nav className={styles.content}>
                <ul className={styles.contentUl}>
                    <li><Link to="/#" className={styles.contentLink}>강아지 분양</Link></li>
                    {/* <li><Link to="/cat" className={styles.contentLink}>고양이 분양</Link></li> */}
                    <li><Link to="/#" className={styles.contentLink}>병원/훈련소</Link></li>
                    <li><Link to="/#" className={styles.contentLink}>분양 Tip</Link></li>
                    <li><Link to="/#" className={styles.contentLink}>커뮤니티</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;