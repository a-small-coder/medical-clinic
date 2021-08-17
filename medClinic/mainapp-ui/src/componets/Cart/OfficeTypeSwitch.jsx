import React from 'react';

function OfficeTypeSwitch(props) {
    const buttonInitClass = "office-type-block__button btn btn_white"
    const onOptionHomeVisitClick = (e) =>{
        props.officeOptionHandler('home')
    }
    const onOptionOfficeVisitClick = (e) =>{
        props.officeOptionHandler('in office')
    }
    return (
        <div className="cart-info__office-type office-type-block">
            <div className="office-type-block__switching">
                <button
                    className={props.type_office === 'home' ? buttonInitClass + " _active" : buttonInitClass}
                    onClick={onOptionHomeVisitClick}
                >
                    Выезд на дом
                </button>
                <button
                    className={props.type_office === 'in office' ? buttonInitClass + " _active" : buttonInitClass}
                    onClick={onOptionOfficeVisitClick}
                >
                    У нас
                </button>
            </div>
            
        </div>
    );
}

export default OfficeTypeSwitch;