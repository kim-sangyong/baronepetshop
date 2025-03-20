import React from "react";
import { useState } from "react";
import {Helmet} from "react-helmet-async";
import { Link } from 'react-router-dom';
import styles from "../assets//styles/MainPage.module.scss";
import FixedMenu from "../components/FixedMenu.jsx";
import Baro from "../assets/images/Baro.png";
import BichonData from "../data/BichonData.js";
import PoodleData from "../data/PoodleData.js";
import MalteseData from "../data/MalteseData.js";


function MainPage () {
    const [selectedBreed, setSelectedBreed] = useState('bichon'); // 디폴트 비숑

    // 선택된 품종에 따른 데이터 변경
    const getBreedData = () => {
        switch (selectedBreed) {
            case 'maltese':
                return MalteseData; // 말티즈 데이터로 변경
            case 'poodle':
                return PoodleData; // 푸들 데이터로 변경
            default:
                return BichonData; // 비숑 기본값
        }
    };
    

    return(
        <>
            <Helmet>
                <title>바로네 펫샵 - 강아지 분양</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="바로네 펫샵에서 귀여운 강아지를 만나보세요!" />
                <meta name="keywords" content="강아지, 분양, 비숑, 말티즈, 푸들, 펫샵, 강아지 키우기, 귀여운 강아지" />
                <meta property="og:title" content="바로네 펫샵 - 강아지 분양" />
                <meta property="og:description" content="바로네 펫샵에서 다양한 강아지 품종을 만나보세요." />
                <meta property="og:image" content="https://raw.githubusercontent.com/kim-sangyong/baronepetshop/main/src/assets/images/maltese/MalteseOne.jpg" />
                <meta property="og:url" content="https://kim-sangyong.github.io/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="바로네 펫샵 - 강아지 분양" />
                <meta name="twitter:description" content="바로네 펫샵에서 다양한 품종의 강아지를 분양받으세요." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/kim-sangyong/baronepetshop/main/src/assets/images/maltese/MalteseOne.jpg" />
            </Helmet>
        <section className={styles.banner}>
            <div className={styles.bannerBox}>
                <strong>EVENT!!</strong>
                <img src={Baro} alt="배너 사진" className={styles.bannerImg}/>
            </div>
        </section>
        
        <section className={styles.search} aria-label="강아지 품종">
            <nav className={styles.searchNav}>
                <ul className={styles.searchUl}>
                    <li>
                        <span 
                        aria-label="비숑 강아지 선택" 
                        role="button" 
                        tabIndex="0" 
                        onClick={() => setSelectedBreed('bichon')} 
                        className={styles.puppyLink}>
                        #비숑
                        </span>
                    </li>

                    <li>
                        <span 
                            aria-label="말티즈 강아지 선택" 
                            role="button" 
                            tabIndex="0" 
                            onClick={() => setSelectedBreed('maltese')} 
                            className={styles.puppyLink}>
                            #말티즈
                        </span>
                    </li>

                    <li><span 
                            aria-label="푸들 강아지 선택" 
                            role="button" 
                            tabIndex="0" 
                            onClick={() => setSelectedBreed('poodle')} 
                            className={styles.puppyLink}>
                            #푸들
                        </span>
                    </li>
                </ul>
            </nav>
        </section>
        {/* 비숑 분양 목록 */}
        <section className={styles.puppyCon} aria-label="비숑 분양 리스트">
            <ul className={styles.puppyBox}>
                {getBreedData().map((puppy, index) => (
                    <li key={index}>
                        <Link to="/#" className={styles.puppyLink}>
                            <img src={puppy.img} alt={`${selectedBreed} ${puppy.name} 사진`} className={styles.puppyImg} />
                            <p>이름 : {puppy.name}</p>
                            <p>나이 : {puppy.old}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
        <FixedMenu />
        </>
    );
}

export default MainPage;