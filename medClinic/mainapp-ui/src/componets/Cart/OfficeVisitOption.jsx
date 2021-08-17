import React from 'react';
import { Link } from 'react-router-dom';

function OfficeVisitOption(props) {
    return (
        <Link to="/conformation"
            className="cart-info__confirm btn _circle-btn _filled-btn _green"
        >
            ОФОРМИТЬ ЗАКАЗ
        </Link>
    );
}

export default OfficeVisitOption;