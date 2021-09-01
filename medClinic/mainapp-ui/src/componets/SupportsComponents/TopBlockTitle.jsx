import React from 'react';
import { Link } from 'react-router-dom';

function TopBlockTitle(props) {
    if (props.link){
        return (
            <div className={props.wrapperClass + " top-block"}>
                
                <h3 className="top-block__title _title">{props.title}</h3>
                <Link to={props.link.ref} className="top-block__order-rezults _text-link">
                    {props.link.text}
                </Link>
            </div>
        );
    }

    return (
        <div className={props.wrapperClass + " top-block"}>
            <h3 className="top-block__title _title">{props.title}</h3>
        </div>
    );

    
}

export default TopBlockTitle; 