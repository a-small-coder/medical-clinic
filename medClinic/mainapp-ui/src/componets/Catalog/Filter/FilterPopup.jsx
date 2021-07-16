import React from 'react';
import PopupItem from './PopupItem';

const FilterPopup = () => {


    return (
        <div class="popup popup_filter _full">
            <div class="popup__content">
                <div class="popup__body popup-filter">
                    <div class="popup-filter__header">
                        <div class="popup__close"></div>
                        <div class="popup-filter__title">Group 1</div>
                    </div>
                    <div class="popup-filter__items">
                        <PopupItem/>
                        <PopupItem/>
                        <PopupItem/>
                        <PopupItem/>
                        <PopupItem/>
                        <PopupItem/>
                        <PopupItem/>
                    </div>
                    <div class="popup-filter__footer">
                        <button class="popup-filter__send btn">Show All</button>
                        <button class="popup-filter__clear btn btn_white">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPopup;