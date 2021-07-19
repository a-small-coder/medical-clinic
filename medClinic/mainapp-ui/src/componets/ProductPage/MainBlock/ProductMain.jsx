import React from 'react';
import ProductForMobile from './ProductForMobile';
import ProductForPC from './ProductForPC';
import Description from './Description'
const ProductMain = (props) => {
    
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    let descpitionsElements
    let contentBlock;
    if (!isMobile){
        props.product.content.forEach(c => {
            if (c.active_block){
                contentBlock = c;
            }
        })
        console.log(contentBlock);
        console.log(props.product);
        descpitionsElements = contentBlock.items.map(i => <Description key={i.pos} title={i.title} text={i.text}/>)
    }
    return (
        isMobile ? <div className="product-main__menu menu-product"><ProductForMobile /></div> :
        <div className="product-main__menu menu-product"><ProductForPC content={props.product.content} switchProductActiveContent={props.switchProductActiveContent}/> {descpitionsElements}</div>
    );

    
}

export default ProductMain;