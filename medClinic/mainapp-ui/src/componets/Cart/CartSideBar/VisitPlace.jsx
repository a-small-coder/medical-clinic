import React from 'react';

function VisitPlace(props) {
    return (
        <div className="cart-info__visit-place visit-place">
                <div className="visit-place__region ">
                    <div className="visit-place__item _icon-location">
                        Москва
                    </div>
                </div>
                <div className="visit-place__office">
                    <div className="visit-place__title _title-standart">
                        Медицинский оффис:
                    </div>
                    <div className="visit-place__item _icon-aid-kit">
                        <span>{props.office_address} </span>
                    </div>
                </div>
        </div>
    );
}

export default VisitPlace;