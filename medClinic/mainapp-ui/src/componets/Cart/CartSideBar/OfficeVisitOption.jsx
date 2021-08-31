import React from 'react';
import VisitPlace from './VisitPlace';

function OfficeVisitOption(props) {
    return (
        <React.Fragment>
            <VisitPlace type_office={props.type_office}/>
            <button onClick={props.onButtonClick}
                className="cart-info__confirm btn _circle-btn _filled-btn _green"
            >
                ОФОРМИТЬ ЗАКАЗ
            </button>
        </React.Fragment>
    );
}

export default OfficeVisitOption;