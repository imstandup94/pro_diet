import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import CardMiddle from '../../common/card/cardMiddle';
import CardTitle from '../../common/card/cardTitle';
import styles from '../../../pages/home/home.module.css';

const Step = React.memo((props) => {
    const time = [{label: "활동시간", value: 30}];
    const kcal = [{label: "활동시간", value: 21}];
    const km = [{label: "활동시간", value: 419}];

    return(
        <section className={`${styles.stepContainer} card-container`}>
            <CardTitle title='걸음 수' />
            <CardMiddle number={362} unit='걸음' goal='목표 32만보' />
            <ul className="card-bottom" style={{display: 'flex'}}>
                <li>
                    <svg viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#FDEAEE" strokeWidth="16" />
                        <text x="50%" y="50%" text-anchor="middle">30분</text>
                        <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#DF385B"
                        strokeWidth="16"
                        strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${2 * Math.PI * 90 * 0.25}`}
                        strokeDashoffset={2 * Math.PI * 90 * 0.25}
                        />
                    </svg>
                    <span className={styles.label}>활동시간</span>
                </li>
                <li>
                    <svg viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#FDEAEE" strokeWidth="16" />
                        <text x="50%" y="50%" text-anchor="middle">21kcal</text>
                        <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#DF385B"
                        strokeWidth="16"
                        strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${2 * Math.PI * 90 * 0.25}`}
                        strokeDashoffset={2 * Math.PI * 90 * 0.25}
                        />
                    </svg>
                    <span className={styles.label}>칼로리</span>
                </li>
                <li>
                    <svg viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#FDEAEE" strokeWidth="16" />
                        <text x="50%" y="50%" text-anchor="middle">0.44km</text>
                        <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#DF385B"
                        strokeWidth="16"
                        strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${2 * Math.PI * 90 * 0.25}`}
                        strokeDashoffset={2 * Math.PI * 90 * 0.25}
                        />
                    </svg>
                    <span className={styles.label}>활동거리</span>
                </li>
            </ul>
        </section>
    );
});

export default Step;