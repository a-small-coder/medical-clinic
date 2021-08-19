import React from 'react';
import ProductForMobile from './ProductForMobile';
import ProductForPC from './ProductForPC';
import Description from './Description'
import LoadingSheme from '../../Other/LoadingSheme';
const ProductMain = (props) => {
    
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    let contentBlock;
    let productsLen = props.product.content.length

    if (productsLen === 0){
        return (
            <div className="product-main__menu menu-product">
                <Description title={"Упс..."} text={"К сожалению у данного товара пока ещё нет блока с описанием"} />
            </div>
        )
    }
    if (isMobile) {
        return (
            <div className="product-main__menu menu-product"><ProductForMobile /></div>
        )
    }

    if (productsLen > 0){
        props.product.content.forEach(c => {
            if (c.active_block){
                contentBlock = c;
            }
        })
        let descpitionsElements = contentBlock.items.map(i => (
            <Description key={i.pos} title={i.title} text={i.text}/>
        ))

        return (
            <div className="product-main__menu menu-product">
                <ProductForPC 
                    content={props.product.content} 
                    switchProductActiveContent={props.switchProductActiveContent} 
                />
                {descpitionsElements}
            </div>
        )
    }

    return (
        <LoadingSheme block={true}/>
    )
    

    
}

export default ProductMain;