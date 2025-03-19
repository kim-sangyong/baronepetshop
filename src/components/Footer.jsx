import React from "react";
import styles from "../assets/styles/Footer.module.scss";
import Foot from "../assets/images/Foot.png";
import Call from "../assets/images/Call.png";

function Footer() {
    return(
        <footer className={styles.footerCon}>
            <div className={styles.footer}>
                <div className={styles.footerH2}>
                    <h2>바로네 펫샵</h2><img src={Foot} alt="바로네 펫샵 로고" className={styles.footImg}/>
                        <div className={styles.callCon}>
                            <img src={Call} alt="상담 전화" className={styles.callImg}/>
                                <div className={styles.callTxt}>
                                        <span className={styles.callSpan}>9:00 ~ 6:00 상담</span>
                                        <span className={styles.callSpan}>Tel: 070-0000-0000</span>
                                </div>
                        </div>
                </div>
                <span className={styles.footSpan}>상호명: 바로네 펫샵 | 대표자 : 김상용</span>
                <span className={styles.footSpan}>바로네 펫샵 주소 : 남양주시</span>
                <span className={styles.footSpan}>사업자등록번호 : 000-00-00000</span>
                <span className={styles.footSpan}>동물판매허가번호 : 0000000-000-0000-0000</span>
                <span className={styles.footSpan}>&copy; 2024 Barone Petshop. All Rights Reserved.</span>
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;