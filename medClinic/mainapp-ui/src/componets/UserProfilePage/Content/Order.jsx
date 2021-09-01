import React from 'react';

function Order(props) {
    return (
        <div>
            <pre>{JSON.stringify(props.l, null, 3)}</pre>
        </div>
    );
}

export default Order;