import React from 'react';
import { Link } from 'react-router-dom';
import Analyze from './Analyze';
import Swiper from 'react-id-swiper';
const AnalyzeComplexes = (props) => {

    const sliderRef = React.useRef(null);

    let analyzeEkements = props.analyzes.map(a => <Analyze key={a.id} number={`0 ${a.id}`} title={a.title} text={a.text} img={a.img} link={a.link}/>)

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
        <section class="page__sub-slider-big sub-slider-big">
            <div class="sub-slider-big__container _container">
                <div class="sub-slider-big__body">
                    <h2 class="sub-slider-big__title _title">50+ Beautiful rooms inspiration</h2>
                    <div class="sub-slider-big__text">
                        Our designer already made a lot of beautiful
                        prototipe of rooms that inspire you
                    </div>
                    <Link to="" class="sub-slider-big__button btn" activeClassName="sub-slider-big__button btn">Explore More</Link>
                </div>
                <div class="sub-slider-big__slider slider-sub-slider-big">
                    <Swiper {...params} ref={sliderRef}>
                    {analyzeEkements}
                    </Swiper>
                    <div class="slider-sub-slider-big__arrows slider-arrows">
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down" onClick={goPrev}></button>
                        <button type="button" class="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down" onClick={goNext}></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnalyzeComplexes;