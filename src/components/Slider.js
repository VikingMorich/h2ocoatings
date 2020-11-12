import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/Slider/customSlider.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import React from 'react';

export default function Slider() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
            <AutoplaySlider
                play={true}
                className="c-slider"
                cssModule={AwesomeSliderStyles}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="/imgs/infinity.jpg" />
                <div data-src="/imgs/anticorrision_01.jpg" />
                <div data-src="/imgs/TEXTURA 2.jpg" />
            </AutoplaySlider>
    );
}