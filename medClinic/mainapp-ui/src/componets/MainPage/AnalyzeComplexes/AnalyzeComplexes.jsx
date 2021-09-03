import React from 'react';
import { Link } from 'react-router-dom';
import Analyze from './Analyze';
import Swiper from 'react-id-swiper';
import LoadingSheme from '../../SupportsComponents/LoadingSheme';
const AnalyzeComplexes = (props) => {

    const sliderRef = React.useRef(null);
    if (props.analyzes.length === 0){
        return <LoadingSheme page={true}/>
    }
    let analyzeEkements = props.analyzes.map(a => <Analyze key={a.id} number={`0 ${a.id}`} title={a.title_min} text={"популярный комплекс"} img={a.small_image} link={`catalog/complex-analyzes/${a.id}`}/>)

    const goNext = () => {
      if (sliderRef.current && sliderRef.current.swiper) {
        sliderRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (sliderRef.current && sliderRef.current.swiper) {
        sliderRef.current.swiper.slidePrev();
      }
    };

    const params = {
        observer: true,
		observeParents: true,
		slidesPerView: "auto",
		spaceBetween: 24,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 0,
		preloadImages: false,
		parallax: true,
        pagination: {
            el: 'slider-sub-slider-big__dotts',
            type: 'bullets',
            clickable: true,
        },
        wrapperClass: "swiper-wrapper",
        containerClass: "slider-sub-slider-big__body _swiper"
      }

    return (
        <section className="page__sub-slider-big sub-slider-big">
            <div className="sub-slider-big__container _container">
                <div className="sub-slider-big__body">
                    <h2 className="sub-slider-big__title _title">Популярные анализы собраны в комплексы</h2>
                    <div className="sub-slider-big__text">
                        Наша клиника заботится о своих клиента. 
                        Теперь не придется набирать полную корзину анализов, 
                        достаточно выбрать нужный комплекс.
                    </div>
                    <Link to="catalog/complex-analyzes" className="sub-slider-big__button btn" >В каталог</Link>
                </div>
                <div className="sub-slider-big__slider slider-sub-slider-big">

                    <Swiper {...params} ref={sliderRef}>
                        {analyzeEkements}
                    </Swiper>
                    <div className="slider-sub-slider-big__arrows slider-arrows">
                        <button type="button" className="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down" onClick={goPrev}></button>
                        <button type="button" className="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down" onClick={goNext}></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnalyzeComplexes;