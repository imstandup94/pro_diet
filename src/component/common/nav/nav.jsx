import React from 'react';
import CalendarIcon from '../icon/calendarIcon';
import ChallengeIcon from '../icon/challengeIcon';
import HomeIcon from '../icon/homeIcon';
import MypageIcon from '../icon/mypageIcon';
import styles from './nav.module.css';

const Nav = React.memo((props) => {
    return(
        <nav className={styles.nav}>
            <ul>
                <li className={`${styles.menu} ${styles.active}`}>
                    <div><HomeIcon />홈</div>
                </li>
                <li className={styles.menu}>
                    <div><CalendarIcon />캘린더</div>
                </li>
                <li className={styles.menu}><div><ChallengeIcon />챌린지</div></li>
                <li className={styles.menu}><div><MypageIcon />마이페이지</div></li>
            </ul>
        </nav>
    );
});

export default Nav;