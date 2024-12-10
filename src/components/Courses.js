import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import videoIcon from "../icons/ondemand_video-white-18dp.svg"

export default function Courses() {
    const [t] = useTranslation("global")

    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("courses")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <React.Fragment>
            <div className="c-courses">
                <h1>{t("courses").toUpperCase()}</h1>
                <div className="c-courses--info">
                    <a href="/courses_video.mp4" target="_blank" rel="noreferrer" className="c-courses--carousel-wrapper">
                        <OwlCarousel className="owl-theme c-courses--carousel" loop margin={10} nav={false} items={1} center={true} dots={false} autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true}>
                            <div className="item">
                                <img src="/imgs/courses/courses2.jpeg" alt="infinity-microciments"/>
                            </div>
                            <div className="item">
                                <img src="/imgs/courses/courses3.jpeg" alt="infinity-microciments"/>
                            </div>
                            <div className="item">
                                <img src="/imgs/courses/courses4.jpeg" alt="infinity-microciments"/>
                            </div>
                            <div className="item">
                                <img src="/imgs/courses/courses5.jpeg" alt="infinity-microciments"/>
                            </div>
                        </OwlCarousel>
                        <div className="c-courses--video-link">
                            <img alt="video courses" src={videoIcon} />
                            <span>{t('courses-col.video')}</span>
                        </div>
                    </a>
                    <div className="c-courses--text">
                        <p>{t("courses-col.p1")}</p>
                        <p>{t("courses-col.p2")}</p>
                        <ul>
                            <li>{t("courses-col.op1")}</li>
                            <li>{t("courses-col.op2")}</li>
                            <li>{t("courses-col.op3")}</li>
                            <li>{t("courses-col.op4")}</li>
                        </ul>
                        <p>{t("courses-col.p3")}</p>
                        <p>{t("courses-col.p4")}</p>
                        <p>
                            {t("courses-col.info")} 
                            <a href={`mailto:${t('email')}`}>{t("email")}</a>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}