import React from 'react';

function OfficeTypeSwitch(props) {
    const button_init_class = "office-type-block__button btn btn_white _circle-btn"
    const onOptionHomeVisitClick = (e) =>{
        props.officeOptionHandler('home')
    }
    const onOptionOfficeVisitClick = (e) =>{
        props.officeOptionHandler('in office')
    }
    const getButtonClassName = (button_value) => {
        if (button_value === props.type_office){
            return button_init_class + " _active"
        }
        else {
            return button_init_class
        }
    }
    return (
        <div className="cart-info__office-type office-type-block">
            <div className="office-type-block__switching">
                <button
                    className={getButtonClassName('home')}
                    onClick={onOptionHomeVisitClick}
                >
                    Выезд на дом
                </button>
                <button
                    className={getButtonClassName('in office')}
                    onClick={onOptionOfficeVisitClick}
                >
                    В TedMed
                </button>
            </div>
        </div>
    );
}

export default OfficeTypeSwitch;