import React from 'react';
import Group from './Group';

const FormItems = (props) => {
    let groupElements = props.groupItems.map(
        a => <Group key={a.id} title={a.title} active_count={a.active_count}/>);

    return (
        <div class="filter-form__items">
            <div class="filter-form__item">
                <div class="filter-form__search search-form-filter">
                    <button data-spoller type="button" class="filter-form__btn _icon-search"></button>
                    <input autoComplete="off" type="text" name="form[]" data-value="Поиск по анализам" class="filter-form__input" />
                </div>
            </div>

            {groupElements}

            <div class="filter-form__item">
                <div class="filter-form__radio radio-double">
                    <label class="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span class="radio-double__btn-label">для мужчин</span>
                    </label>
                    <label class="radio-double__btn">
                        <input type="radio" value="" name="gender" />
                        <span class="radio-double__btn-label">для женщин</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FormItems;