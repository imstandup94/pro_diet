import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowIcon from '../icon/arrowIcon';
import CloseIcon from '../icon/closeIcon';
import styles from './modal.module.css';
import './datepicker/datepicker.css';

const Modal = React.memo((props) => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const todayDate = year + '-' + month  + '-' + day;


    const ExampleCustomInput = ({ value, onClick }) => {
        //console.log(value);
        return <button className={styles.datePickBtn} onClick={onClick}>{value}</button>;
    };

    
    const [date, setDate] = useState(new Date());

    return(
        <div className={styles.modalWrapper}>
            <section className={styles.modalContainer}>
                <header>
                    <h2 className={styles.title}>체중 기록하기</h2>
                    <button className={`${styles.closeBtn} btn`}><CloseIcon size={40} /></button>
                </header>
                <form className={styles.weightForm} onSubmit={onSubmit}>
                    <div className={`${styles.calendar} ${styles.inputContainer}`}>
                        <button className={`${styles.prevBtn} btn`}><ArrowIcon /></button>
                        <div className={styles.calendarContainer}>
                            <DatePicker
                            dateFormat="yyyy-MM-dd"
                            selected={date}
                            maxDate={new Date()}
                            onChange={date => setDate(date)}
                            customInput={<ExampleCustomInput  />}
                            />
                        </div>
                        <button className={`btn`}><ArrowIcon /></button>
                    </div>
                    
                    <div className={styles.inputContainer}>
                        <label>체중 <small>(kg)</small></label>
                        <input type="number" min="0" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>오늘의 기분</label>
                        <div className={styles.moodContainer}>
                            <input type="radio" id="joy" name="mood" value="" hidden />
                            <label for="joy">😀</label>

                            <input type="radio" id="soso" name="mood" value="" hidden />
                            <label for="soso">😐</label>

                            <input type="radio" id="happy" name="mood" value="" hidden />
                            <label for="happy">😍</label>

                            <input type="radio" id="sadness" name="mood" value="" hidden />
                            <label for="sadness">😭</label>
                            
                            <input type="radio" id="panic" name="mood" value="" hidden />
                            <label for="panic">😱</label>
                            
                            <input type="radio" id="anger" name="mood" value="" hidden />
                            <label for="anger">😡</label>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label>메모</label>
                        <textarea></textarea>
                    </div>
                    <div className={styles.btnContainer}>
                        <button type="submit" className={`btn ${styles.saveBtn}`}>저장</button>
                    </div>
                </form>
            </section>
        </div>
    );
});

export default Modal;