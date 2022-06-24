import React from 'react';
import CardMiddle from '../../common/card/cardMiddle';
import CardTitle from '../../common/card/cardTitle';
import styles from '../../../pages/home/home.module.css';
import CameraIcon from '../../common/icon/cameraIcon';
import CheckIcon from '../../common/icon/checkIcon';

const Workout = React.memo((props) => {
    return(
        <section className={`card-container`}>
            <CardTitle title='운동' />
            <CardMiddle number={421} unit='kcal' goal='목표 1000kcal' />
            <ul className={`${styles.workoutDataContaier} ${styles.recordContainer}`}>
                <li>
                    <div className={styles.imgBox}>
                        <img src='img//workout01.jpg' alt='' />
                        {/* <CameraIcon />
                        <span>사진 첨부하기</span> */}
                    </div>
                    <div className={styles.texts}>
                        <span className={styles.title}>집에서 하는 전신 다이어트 운동 15분 영상</span>
                        <span className={styles.channel}>Thankyou BUBU</span>
                        <span className={styles.totalTime}>소요시간 15:10</span>
                    </div>
                    <button className={`btn`}><CheckIcon color='#fff' /></button>
                </li>
                <li>
                    <div className={styles.imgBox}>
                        <img src='img//workout02.jpg' alt='' />
                        {/* <CameraIcon />
                        <span>사진 첨부하기</span> */}
                    </div>
                    <div className={styles.texts}>
                        <span className={styles.title}>마일리사이러스 복부 운동 15분, 하루에 2회만 해봐요!</span>
                        <span className={styles.channel}>Thankyou BUBU</span>
                        <span className={styles.totalTime}>소요시간 19:22</span>
                    </div>
                    <button className={`btn`}><CheckIcon color='#fff' /></button>
                </li>
            </ul>
        </section>
    );
});

export default Workout;