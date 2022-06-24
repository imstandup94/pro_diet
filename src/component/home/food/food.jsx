import React from 'react';
import CardMiddle from '../../common/card/cardMiddle';
import CardTitle from '../../common/card/cardTitle';
import styles from '../../../pages/home/home.module.css';
import PlusIcon from '../../common/icon/plusIcon';
import CameraIcon from '../../common/icon/cameraIcon';

const Food = React.memo((props) => {
    return(
        <section className={`card-container`}>
            <CardTitle title='식단' />
            <CardMiddle number={621} unit='kcal' goal='목표 1200kcal' />
            <ul className={`${styles.foodDataContaier} ${styles.recordContainer}`}>
                <li className={styles.noData}>
                    <div className={styles.imgBox}>
                        <CameraIcon />
                        <span>사진 첨부하기</span>
                    </div>
                    <div className={styles.texts}>
                        <span className={styles.tag}>아침</span>
                        <span className={styles.kcal}>0kcal</span>
                        <span className={styles.foodName}>먹은 음식을 기록해주세요.</span>
                    </div>
                    <button className={`btn`}><PlusIcon /></button>
                </li>

                <li>
                    <div className={styles.imgBox}>
                        <img src="img/food01.jpg" alt="" />
                        {/* <CameraIcon />
                        <span>사진 첨부하기</span> */}
                    </div>
                    <div className={styles.texts}>
                        <span className={styles.tag}>점심</span>
                        <span className={styles.kcal}>186kcal</span>
                        <span className={styles.foodName}>아보카도 에그 샐러드 (126kcal)</span>
                        <span className={styles.foodName}>아이스 아메리카노 (80kcal)</span>
                    </div>
                    <button className={`btn`}><PlusIcon /></button>
                </li>

                <li>
                    <div className={styles.imgBox}>
                        <CameraIcon />
                        <span>사진 첨부하기</span>
                    </div>
                    <div className={styles.texts}> 
                        <span className={styles.tag}>저녁</span>
                        <span className={styles.kcal}>186kcal</span>
                        <span className={styles.foodName}>아보카도 에그 샐러드 (126kcal)</span>
                        <span className={styles.foodName}>아이스 아메리카노 (80kcal)</span>
                    </div>
                    <button className={`btn`}><PlusIcon /></button>
                </li>

                <li>
                    <div className={styles.imgBox}>
                        <CameraIcon />
                        <span>사진 첨부하기</span>
                    </div>
                    <div className={styles.texts}> 
                        <span className={styles.tag}>간식</span>
                        <span className={styles.kcal}>186kcal</span>
                        <span className={styles.foodName}>아보카도 에그 샐러드 (126kcal)</span>
                        <span className={styles.foodName}>아이스 아메리카노 (80kcal)</span>
                    </div>
                    <button className={`btn`}><PlusIcon /></button>
                </li>
            </ul>
        </section>
    );
});

export default Food;