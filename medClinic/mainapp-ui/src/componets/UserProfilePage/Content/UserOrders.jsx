import React from 'react';

function UserOrders(props) {
    return (
        <div className="main-profile">
            <div className="main-profile__title">
                Общая информация:
            </div>
            <div className="main-profile__content">
                <div className="main-profile__orders orders-table">
                    <div className="orders-table__cell _table-title">№</div>
                    <div className="orders-table__cell _table-title">Статус</div>
                    <div className="orders-table__cell _table-title">Оплата</div>

                    <div className="orders-table__cell">12341</div>
                    <div className="orders-table__cell">В обработке</div>
                    <div className="orders-table__cell">Оплата на месте</div>

                    <div className="orders-table__cell _filled">12341</div>
                    <div className="orders-table__cell _filled">Отменен</div>
                    <div className="orders-table__cell _filled">Не оплачен</div>
                </div>
            </div>
        </div>
    );
}

export default UserOrders;