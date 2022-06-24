import React from 'react';
import ArrowIcon from '../icon/arrowIcon';
import styles from './header.module.css';

const Header = React.memo((props) => {
    return(
        <header className={styles.header}>
            <h1 className={styles.logoContainer}>
                {/* Sun&Moon */}
                <img src="/img/logo.png" alt="logo" />
            </h1>
            <section className={styles.right}>
                <div className={styles.goalMessage}>
                    {/* <p>📌 먹을까 말까 고민이 된다면 먹지마라</p>
                    <button type="button" className={`${styles.btn} btn`}></button> */}
                </div>
                <div className="d-flex">
                    <div className={styles.modeBtnContainer}>
                        <button type="button"></button>
                    </div>
                    <ul className={styles.myInfo}>
                        <li className={styles.imgBox}>
                            <img src='img/profile.jpg' alt='' />
                        </li>
                        <li className={styles.textContainer}>
                            <h4 className={styles.name}>Lee HaLi</h4>
                            <h6 className={styles.mail}>dream@gmail.com</h6>
                        </li>
                        <li className={styles.btnContainer}>
                            <button type="button" className="view-btn"><ArrowIcon /></button>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    );
});

export default Header;