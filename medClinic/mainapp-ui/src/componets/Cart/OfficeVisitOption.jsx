import React from 'react';
import { Link } from 'react-router-dom';
import VisitPlace from './VisitPlace';

function OfficeVisitOption(props) {
    return (
        <React.Fragment>
            <VisitPlace type_office={props.type_office}/>
            <Link to="/conformation"
                className="cart-info__confirm btn _circle-btn _filled-btn _green"
            >
                ОФОРМИТЬ ЗАКАЗ
            </Link>
        </React.Fragment>
    );
}

export default OfficeVisitOption;