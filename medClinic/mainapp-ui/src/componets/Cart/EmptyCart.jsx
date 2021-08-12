import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = (props) =>{

    return (
        <main className="page">
                <section className="page__base base-block">
                    <div className="base-block__container _container">
                        <div className="base-block__content empty-cart">
                            <div className="empty-cart__left-part left-part">
                                <h3 className="left-part__title _title">Ваша корзина пуста</h3>
                                <div className="left-part__text">
                                    <p>
                                    Вы еще не добавили ни одного продукта. Раздел «Анализы» поможет вам найти необходимое исследование.
                                    </p>
                                </div>
                                <Link to="catalog/all-analyzes" className="left-part__button btn _icon-arrow-link">ПЕРЕЙТИ В КАТАЛОГ</Link>
                            </div>
                            <div className="empty-cart__right-part right-part">
                                <button className="right-part__cart-icon _icon-cart"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
export default EmptyCart