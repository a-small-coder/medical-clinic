import React from 'react';

const Description = (props) => {


    return (
        <div className="menu-product__content content-menu">
            <h5 className="content-menu__title">
               {props.title}
            </h5>
            <div className="content-menu__text">
                {props.text}
            </div>
        </div>
    );
}

export default Description;