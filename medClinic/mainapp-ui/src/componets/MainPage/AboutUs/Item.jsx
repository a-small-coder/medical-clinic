import React from 'react';
import { Link } from 'react-router-dom';
const Item = () => {
    return (
        <div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-100%" class="swiper-slide">
            <h5 class="slider-aboutus__title">История компании</h5>
            <div class="slider-aboutus__text">
                История компании - Компания была основана врачом-онкологом Павлом Крвцовым
                в 2003 году, а в 2005 году открылся первый медицинский офис "TedMed". В тот
                период спектр доступных исследований составлял всего 30 тестов. Сегодня
                сеть "TedMed" охватывает более 580 городов не только в России, но также в
                Украине, Казахстане, Беларуси, Армении и Киргизии. Восемь центральных
                лабораторий выполняют более 2 000 видов исследований.
            </div>
            <Link to="" class="slider-aboutus__button btn btn_white" 
            activeClassName="slider-aboutus__button btn btn_white">Explore More</Link>
        </div>
    );
}

export default Item;