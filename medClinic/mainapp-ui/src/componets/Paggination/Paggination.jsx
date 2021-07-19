import React from 'react';
const Paggination = (props) => {
    let pageNumbers = []
    for (let i= 1; i <= props.pagesCount; i++){
        pageNumbers.push(i);
    }
    const onClickButtonPrev =()=>{
        props.setCurrentPage(props.totalPage - 1)
    }
    const onClickButtonNext =()=>{
        props.setCurrentPage(props.totalPage + 1)
    }
    const onClickPageNumber =(target)=>{
        let clickNumber = Number(target.target.innerText );
        if (clickNumber !== props.totalPage){
            props.setCurrentPage(clickNumber)
        }
    }
    const anactiveClassName = " _anactive";
    let buttonPrevClassName = "paggination__arrow slider-arrow slider-arrow_white _icon-arrow-down slider-arrow_prev"
    let buttonNextClassName = "paggination__arrow slider-arrow slider-arrow_white _icon-arrow-down slider-arrow_next"
    return (
        <div className="analyze-section__paggination paggination">
            <div className="paggination__items">
                <button className={props.totalPage > 1 ? buttonPrevClassName : buttonPrevClassName + anactiveClassName}
                onClick={onClickButtonPrev}></button>
                {pageNumbers.map(p => {
                    return <span key={p} onClick={onClickPageNumber} className={props.totalPage === p ? "paggination__page-number _active" : "paggination__page-number"}>{p}</span>
                })}
                <button className={props.totalPage <  props.pagesCount ? buttonNextClassName : buttonNextClassName + anactiveClassName}
                onClick={onClickButtonNext}></button>
            </div>
        </div>
    );
}

export default Paggination;