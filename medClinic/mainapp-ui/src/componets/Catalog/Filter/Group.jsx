import React from 'react';

const Group = (props) => {

    const onFilterButtonClick = () =>{
        props.showHiddenPopup(props.curCategory);
    }
    const spanClassName = props.active_count > 0 ? "filter__btn-count _active" : "filter__btn-count";
    
    return (
        <div className="filter-form__item">
            <button type="button" className="filter-form__filter _icon-equalizer2" onClick={onFilterButtonClick}>
                <span className={spanClassName}>{props.active_count}</span>
                <span>{props.title}</span>
            </button>
        </div>
    );
}

export default Group;