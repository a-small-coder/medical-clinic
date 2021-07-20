import React from 'react';
import ProductForMobile from './ProductForMobile';
import ProductForPC from './ProductForPC';
import Description from './Description'
const ProductMain = (props) => {
    
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    let descpitionsElements
    let contentBlock;
    if (!isMobile && props.product.content.length > 0){
        props.product.content.forEach(c => {
            if (c.active_block){
                contentBlock = c;
            }
        })

        descpitionsElements = contentBlock.items.map(i => <Description key={i.pos} title={i.title} text={i.text}/>)
    }
    return props.product.content.length === 0 ? (
        <div className="product-main__menu menu-product">
            <Description title={"Упс..."} text={"К сожалению у данного товара пока ещё нет блока с описанием"} />
        </div>
        
    ) : (
        isMobile ?
            <div className="product-main__menu menu-product"><ProductForMobile /></div> :
            <div className="product-main__menu menu-product">{props.product.content.length > 0 ?
                <ProductForPC content={props.product.content} switchProductActiveContent={props.switchProductActiveContent} /> :
                ""} {descpitionsElements}</div>
    );

    
}

export default ProductMain;