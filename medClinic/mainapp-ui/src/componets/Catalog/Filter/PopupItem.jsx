import React from 'react';

const PopupItem = (props) => {


    return (
        <div className="popup-filter__item">
            <div className="checkbox">
                <input type="checkbox" className="checkbox__input" />
                <label className="checkbox__label"><span>{props.text}</span></label>
            </div>
        </div>
    );
}

export default PopupItem;