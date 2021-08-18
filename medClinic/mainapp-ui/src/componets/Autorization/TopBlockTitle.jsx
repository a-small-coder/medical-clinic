import React from 'react';
import { Link } from 'react-router-dom';

function TopBlockTitle(props) {

    return (
        <div className="autorization-page__top-block top-block">
            <h3 className="top-block__title _title">{props.title}</h3>
            <Link to={props.link.ref} className="top-block__order-rezults _text-link">
                {props.link.text}
            </Link>
        </div>
    );
}

export default TopBlockTitle; 