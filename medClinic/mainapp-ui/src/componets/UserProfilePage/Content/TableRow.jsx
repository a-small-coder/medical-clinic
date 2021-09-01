import React from 'react';
import { Link } from 'react-router-dom';

function TableRow(props) {
    let cell_class = "orders-table__cell"
    if (props.odd_number){
        cell_class += " _filled"
    }
    return (
        <React.Fragment>
            <div className={cell_class}>{props.number}</div>
            <div className={cell_class}>{props.status}</div>
            <div className={cell_class}>{props.date_create.slice(0,10)}</div>
            <Link to={`order-${props.number}`} className={`${cell_class} _icon-arrow-link`}></Link>
        </React.Fragment>
    );
}

export default TableRow;