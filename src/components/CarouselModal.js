import React from 'react';
import cross from '../icons/clear-black-18dp.svg'
import { useTranslation } from "react-i18next"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Modal(props) {
    const [t] = useTranslation("global")
    
    return (
        <React.Fragment>
            {props.open &&
            <div className="c-cmodal-background">
                <div className="c-cmodal">
                    <img className="c-cmodal--cross" alt="menu-icon" src={cross} onClick={props.toggleModal}/>
                    {props.type === 'infinity-gallery' && 
                        <React.Fragment>
                            <OwlCarousel className="owl-theme" loop margin={10} nav={true} items={1.2} center={true}>
                                <div className="item">
                                    <img src="/imgs/infinity.jpg" alt="infinity-microciments"/>
                                </div>
                                <div className="item">
                                    <img src="/imgs/infinity-supreme-1.jpg" alt="infinity-microciments"/>
                                </div>
                                <div className="item">
                                    <img src="/imgs/infinity3.jpg" alt="infinity-microciments"/>
                                </div>
                                <div className="item">
                                    <img src="/imgs/infinity4.JPG" alt="infinity-microciments"/>
                                </div>
                                <div className="item">
                                    <img src="/imgs/infinity5.jpg" alt="infinity-microciments"/>
                                </div>
                            </OwlCarousel>
                        </React.Fragment>
                    }
                </div>
            </div>
            }
        </React.Fragment>
    );
}