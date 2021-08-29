import React from 'react';
import ProductForPC from './ProductForPC';
import Description from './Description'
import LoadingSheme from '../../SupportsComponents/LoadingSheme';
const ProductMain = (props) => {
    
    let productsLen = props.product.content.length

    if (productsLen === 0){
        return (
            <div className="product-main__menu menu-product">
                <Description title={"Упс..."} text={"К сожалению у данного товара пока ещё нет блока с описанием"} />
            </div>
        )
    }
    if (productsLen > 0){
        let contentBlock = []
        let content_categories = []
        let already_added = []
        props.product.content.forEach((c, i) => {
            let content_ctg = c.analyze_content_category
            if (props.product.active_content_category === content_ctg){
                contentBlock.push(c);
            }
            
            if (already_added.indexOf(content_ctg) === -1){
                already_added.push(content_ctg)
                content_categories.push({
                    id: c.id,
                    category: content_ctg, 
                    title: CONTENT_CATEGORY_CHOICES[content_ctg]
                })
            }
            
        })
        let descpitionsElements = contentBlock.map(i => (
            <Description key={i.id} title={i.title} text={i.text}/>
        ))

        return (
            <div className="product-main__menu menu-product">
                <ProductForPC  
                    switchActiveContentCategory={props.switchActiveContentCategory}
                    categoriesElements={content_categories} 
                    active_category={props.product.active_content_category}
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

const CONTENT_CATEGORY_CHOICES = {
    DESCRIPTION: 'Описание',
    PREPARATIONS: 'Подготовка',
    INDICATIONS_FOR_USE: 'Показания к применению',
    FEEDBACK: 'Интерпретация результатов'
}