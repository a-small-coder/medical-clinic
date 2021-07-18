import React from 'react';
import ProductForMobile from './ProductForMobile';
import ProductForPC from './ProductForPC';
import Paggination from './../../Paggination/Paggination'
import Description from './Description'
const ProductMain = () => {
    
    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
    
    let mainContent;
    let contentText = <span></span>;
    if (isMobile){
        mainContent = <ProductForMobile />;
    }
    else{
        mainContent =  <ProductForPC />
        contentText = <Description/>;
    }
    return (
        <div className="product-main__menu menu-product">

            {mainContent}
            {contentText}
            <div className="catalog__analyze analyze-section">
                <Paggination/>
            </div>
        </div>
    );
}

export default ProductMain;