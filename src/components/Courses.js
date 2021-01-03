import React from 'react';
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import videoIcon from "../icons/ondemand_video-white-18dp.svg"

export default function Courses() {
    const [t] = useTranslation("global")

    return (
        <React.Fragment>
            <div className="c-courses">
                <h1>{t("courses").toUpperCase()}</h1>
                <div className="c-courses--info">
                    <a href="https://scontent-mad1-1.cdninstagram.com/v/t50.16885-16/10000000_638658796854455_3406537881821206985_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2LmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=jWTAumBo1l8AX-cGpKu&vs=17879615887792909_1995161053&_nc_vs=HBksFQAYJEdJQ1dtQUMzSExoVzIwUUNBTWxaM2FjbmRFWXZidlZCQUFBRhUAAsgBABUAGCRHR3FWSmdkVWNYMGJ5a1lCQUxIYkZ6RlQtTnR0YnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaayMGdztrCPxUCKAJDMywXQFTxBiTdLxsYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&oe=5FF16546&oh=641930641bcbadc14325ef7dbe0b5729" target="_blank" rel="noreferrer" className="c-courses--carousel-wrapper">
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