import React from 'react';

const Group = (props) => {

    
    return (
        <div className="filter-form__item">
            <button type="button" className="filter-form__filter _icon-equalizer2">
                <span className="filter__btn-count">{props.active_count}</span>
                <span>{props.title}</span>
            </button>
        </div>
    );
}

export default Group;