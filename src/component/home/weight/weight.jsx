import React from 'react';
import styles from '../../../pages/home/home.module.css';
import CardMiddle from '../../common/card/cardMiddle';
import CardTitle from '../../common/card/cardTitle';
import { ResponsiveBar } from '@nivo/bar';

const Weight = React.memo((props) => {
    
    const data = [
        {date: "08/31", weight: 64.2},
        {date: "09/01", weight: 63.2},
        {date: "09/02", weight: 63.1},
        {date: "09/03", weight: 62.8},
        {date: "09/04", weight: 62.1},
        {date: "09/05", weight: 61.1},
        {date: "09/06", weight: 62.4},
        {date: "09/07", weight: 60.9},
        {date: "09/08", weight: 59.4},
        {date: "09/09", weight: 58.7},
        {date: "09/10", weight: 58.5}
    ];
    
    return(
        <section className={`card-container`}>
            <CardTitle title="체중" />
            <CardMiddle number={59.2} unit='kg' goal='목표까지 -2kg' />
            <div className="card-bottom">
                <ResponsiveBar
                data={data}
                keys={["weight"]}
                indexBy="date"
                margin={{ top: 40, right: 0, bottom: 30, left: 0}}
                padding={0.5}
                borderRadius={10}
                colors="#DF385B"
                animate={true}
                enableLabel={false}
                minValue={0}
                enableGridX={false}
                enableGridY={false}
                theme={{
                    axis: {
                        ticks: {
                          line: {stroke: "none"},
                          text: {fill: "#bbb"}
                        }
                    },
                }}
                />
            </div>
        </section>
    );
});

export default Weight;