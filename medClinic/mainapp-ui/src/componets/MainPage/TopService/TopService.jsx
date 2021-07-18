import React from 'react';
import Content from './Content';
import Slider from './Slider';
const TopService = (props) => {
    return (
        <section className="page__main-slider main-slider">
            <div className="main-slider__container _container">
                <div className="main-slider__body">
                    <Content content={props.serviceData.content}/>
                    <Slider slides={props.serviceData.slides}/>
                </div>
            </div>
        </section>
    );
}

export default TopService;