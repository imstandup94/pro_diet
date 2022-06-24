import React, { useState } from 'react';
import Header from '../../component/common/header/header';
import Modal from '../../component/common/modal/modal';
import Nav from '../../component/common/nav/nav';
import Food from '../../component/home/food/food';
import Step from '../../component/home/step/step';
import Water from '../../component/home/water/water';
import Weight from '../../component/home/weight/weight';
import Workout from '../../component/home/workout/workout';
import styles from './home.module.css';

const Home = React.memo((props) => {
    const initialModal = {
        active: false,
        select: undefined
    };
    const [modal, setModal] = useState(initialModal);

    const clickedMore = () => {
        setModal({active: true, select: undefined});
    };
    return(
        <>
            {/* <Modal /> */}
            <Header />
            <section className={`${styles.homeContainer} container`}>
                <Nav />
                <article className={`${styles.mainContainer} main-container`}>
                    <div>
                        <Weight />
                        <Step />
                        <Water />
                    </div>
                    <div>
                        <Food />
                        <Workout />
                    </div>
                </article>
            </section>
            <footer>Copyright © 2022 서리라. All Rights Reserved.</footer>
        </>
    );
});

export default Home;