import React from 'react';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';

function UserOrders(props) {

    if (props.orders){
        let orders = props.orders.map((o, i) => (
            <TableRow key={o.id} number={o.id} status={o.status} date_create={o.date_create} odd_number={i % 2 === 1}/>
        ))

        return (
            <div className="main-profile">
                <div className="main-profile__title">
                    Общая информация:
                </div>
                <div className="main-profile__content">
                    <div className="main-profile__orders orders-table">
                        <div className="orders-table__cell _table-title">Заказ №</div>
                        <div className="orders-table__cell _table-title">Статус</div>
                        <div className="orders-table__cell _table-title">Дата</div>
                        <div className="orders-table__cell _table-title"></div>
                        {orders}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="main-profile">
            <div className="main-profile__title">
                Ваши заказы:
            </div>
            <div className="main-profile__content">
                    <div className="orders-empty__text _title-standart">Пока здесь пусто...</div>
                    <Link to="/cart" className="left-part__button btn _icon-arrow-link">Перейти в корзину</Link>
                </div>
        </div>
    );
}

export default UserOrders;