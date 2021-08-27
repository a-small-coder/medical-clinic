import React from 'react';
import UnicProduct from './UnicProduct';
const UnicProducts = (props) => {
    let productElements = props.products.map(
        p => <UnicProduct 
        key={p.id} title={p.title} description={p.preview_description} 
        img={p.small_image} slug={p.slug} markers={p.markers}
        />);
    
    const showMoreClickHandler = () =>{
        props.onShowMoreClick()
    }

    return (
        <section className="page__products products">
            <div className="products__container _container">
                <h2 className="products__title _title">Our Products</h2>
                <div className="products__items">
                    {productElements}
                </div>
                <div className="products__footer">
                    <button to="" onClick={showMoreClickHandler}
                        className={!props.isButtonHidden ? "products__more btn btn_white" : "products__more _disable btn btn_white"}>
                        Show More</button>
                </div>
            </div>
        </section>
    );
}

export default UnicProducts;