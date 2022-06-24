import React from 'react';
import CardMiddle from '../../common/card/cardMiddle';
import CardTitle from '../../common/card/cardTitle';
import MinusIcon from '../../common/icon/minusIcon';
import PlusIcon from '../../common/icon/plusIcon';
import styles from './waterContainer.module.css';

const Water = React.memo((props) => {
    const WaterBtnContaeinr = () => {
        return  <div className={styles.waterBtnContaeinr}>
                    <button className='btn'><MinusIcon /></button>
                    <button className='btn'><PlusIcon color="#777" /></button>
                </div>;
    };
    return(
        <section className={`${styles.waterContainer} card-container`}>
            <CardTitle title='물' addBtn={<WaterBtnContaeinr />} />
            <CardMiddle number={400} unit='ml' goal='목표 2L' />
            <div className={styles.water}>
                <span className={styles.text}>20%</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="492" height="136.269" viewBox="0 0 492 136.269">
                    <g transform="translate(-1386 -312.831)">
                        <path d="M-519.442,697.539A1311.385,1311.385,0,0,0-672.6,702.3v90.862c0,14.351,13.431,25.984,30,25.984h432c16.569,0,30-11.633,30-25.984v-63.4C-290.6,714.051-401.6,693.051-519.442,697.539Z" transform="translate(2058.602 -370.051)" fill="#f8b4c2"/>
                        <path d="M207.908-204.181C130.014-205.6,89.663-215.193,71.8-221.2v86.723a29.819,29.819,0,0,0,29.818,29.818H533.978A29.818,29.818,0,0,0,563.8-134.475V-240.926C504.752-235.147,315.487-202.225,207.908-204.181Z" transform="translate(1314.204 553.757)" fill="#df385b"/>
                    </g>
                </svg>
            </div>
        </section>
    );
});

export default Water;