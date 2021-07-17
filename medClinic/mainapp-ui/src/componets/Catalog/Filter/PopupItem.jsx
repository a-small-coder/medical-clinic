import React from 'react';

const PopupItem = (props) => {


    return (
        <div class="popup-filter__item">
            <div class="checkbox">
                <input type="checkbox" class="checkbox__input" />
                <label class="checkbox__label"><span>{props.text}</span></label>
            </div>
        </div>
    );
}

export default PopupItem;