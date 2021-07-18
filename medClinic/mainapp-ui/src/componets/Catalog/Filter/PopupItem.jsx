import React from 'react';

const PopupItem = (props) => {

    const onCheckBoxClick = ({target: checked}) =>{
        if (checked){   
            props.activateCheckBoxHandler(props.categorySlug, props.itemSlug);
        }
        else{
            props.disactivateCheckBoxHandler(props.categorySlug, props.itemSlug);
            
        }
    }

    return (
        <div className="popup-filter__item">
            <div className="checkbox">
                <input type="checkbox" className="checkbox__input" checked={!!props.is_active} onChange={onCheckBoxClick}/>
                <label className="checkbox__label"><span>{props.text}</span></label>
            </div>
        </div>
    );
}

export default PopupItem;