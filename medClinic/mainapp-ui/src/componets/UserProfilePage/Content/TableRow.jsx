import React from 'react';

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
        </React.Fragment>
    );
}

export default TableRow;