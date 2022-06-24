import React from 'react';
import ArrowIcon from '../icon/arrowIcon';

const CardTitle = React.memo(({title, addBtn}) => {
    console.log(addBtn)
    return(
        <div className="card-title">
            <h3 className="title">{title}</h3>
            <div className='d-flex'>
                {addBtn && addBtn}
                <button type="button" className="view-btn"><ArrowIcon /></button>
            </div>
        </div>
    );
});

export default CardTitle;