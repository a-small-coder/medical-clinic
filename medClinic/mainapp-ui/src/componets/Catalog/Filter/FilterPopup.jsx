import React from 'react';
import PopupItem from './PopupItem';

const FilterPopup = (props) => {

    let category = props.items;
    let popupElements = category.tags.map(
        a => <PopupItem key={a.id} text={a.text} is_active={a.is_active}/>);

    return (
        <div class="popup popup_filter _full">
            <div class="popup__content">
                <div class="popup__body popup-filter">
                    <div class="popup-filter__header">
                        <div class="popup__close"></div>
                        <div class="popup-filter__title">{category.title}</div>
                    </div>
                    <div class="popup-filter__items">
                    {popupElements}
                    </div>
                    <div class="popup-filter__footer">
                        <button class="popup-filter__send btn">Показать</button>
                        <button class="popup-filter__clear btn btn_white">Очистить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPopup;