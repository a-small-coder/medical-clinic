import React from 'react';
import Group from './Group';

const FormItems = (props) => {
    let groupElements = props.groupItems.map(
        a => <Group key={a.id} title={a.title} active_count={a.active_count}/>);

    return (
        <div className="filter-form__items">
            <div className="filter-form__item">
                <div className="filter-form__search search-form-filter">
                    <button data-spoller type="button" className="filter-form__btn _icon-search"></button>
                    <input autoComplete="off" type="text" name="form[]" data-value="Поиск по анализам" className="filter-form__input" />
                </div>
            </div>

            {groupElements}

            <div className="filter-form__item">
                <div className="filter-form__radio radio-double">
                    <label className="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span className="radio-double__btn-label">для мужчин</span>
                    </label>
                    <label className="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span className="radio-double__btn-label">для женщин</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FormItems;