import React, {useRef} from 'react';
import Swiper from 'react-id-swiper';
import Stock from './Stock';

const Stocks = (props) => {

  let stocksEkements = props.stocks.map(a => <Stock key={a.id} slogan={a.slogan} text={a.text} img={a.img} link={a.link} />);

  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const params = {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 32,
    watchOverflow: true,
    speed: 800,
    loop: true,
    loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,
    pagination: {
      el: '.slider-stocks__dotts',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    },
    wrapperClass: "swiper-wrapper",
    containerClass: "slider-stocks__body _swiper"
  }

  return (
    <section className="page__stocks stocks">
      <div className="stocks__container _container">
        <h2 className="stocks__title _title">Our Stocks</h2>
        <div className="stocks__slider slider-stocks">
          <Swiper {...params} ref={swiperRef}>
            {stocksEkements}
          </Swiper>
          <div className="slider-stocks__dotts"></div>
          <div className="slider-stocks__arrows slider-arrows">
            <button type="button" className="slider-arrow slider-arrow_white slider-arrow_prev _icon-arrow-down" onClick={goPrev}></button>
            <button type="button" className="slider-arrow slider-arrow_white slider-arrow_next _icon-arrow-down" onClick={goNext}></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stocks;