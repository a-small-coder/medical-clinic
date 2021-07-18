import React from 'react';
import PopupItem from './PopupItem';

const FilterPopup = (props) => {

    let category = props.items;
    let popupElements = category.tags.map(
        a => <PopupItem key={a.id} text={a.text} is_active={a.is_active}/>);

    return (
        <div className="popup popup_filter _full">
            <div className="popup__content">
                <div className="popup__body popup-filter">
                    <div className="popup-filter__header">
                        <div className="popup__close"></div>
                        <div className="popup-filter__title">{category.title}</div>
                    </div>
                    <div className="popup-filter__items">
                    {popupElements}
                    </div>
                    <div className="popup-filter__footer">
                        <button className="popup-filter__send btn">Показать</button>
                        <button className="popup-filter__clear btn btn_white">Очистить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterPopup;