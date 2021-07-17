import React from 'react';
import Content from './Content';
import Slider from './Slider';
const TopService = (props) => {
    return (
        <section class="page__main-slider main-slider">
            <div class="main-slider__container _container">
                <div class="main-slider__body">
                    <Content content={props.serviceData.content}/>
                    <Slider slides={props.serviceData.slides}/>
                </div>
            </div>
        </section>
    );
}

export default TopService;