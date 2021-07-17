import React from 'react';

const Group = (props) => {

    
    return (
        <div class="filter-form__item">
            <button type="button" class="filter-form__filter _icon-equalizer2">
                <span class="filter__btn-count">{props.active_count}</span>
                <span>{props.title}</span>
            </button>
        </div>
    );
}

export default Group;