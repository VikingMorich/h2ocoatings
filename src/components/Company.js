import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Company() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("company")
        window.scrollTo(0, 0)
    }, [t]);
      
    return (
        <div className="c-company">
            <h1>{t("company-col.title")}</h1>
            <img className='c-company--img' src='/imgs/qui_som/foto_equip.jpg' alt="teamwork"/>
            <div className="c-materials--hr-title">
                <div className="c-materials--hr"></div>
                <div className="c-materials--sis-box">
                    <span className="c-materials--sis">{t("company-col.subtitle").toUpperCase()}</span>
                </div>
            </div>
            <p>{t("company-col.p1")}</p>
            <p>{t("company-col.p2")}</p>
            <p>{t("company-col.p3")}</p>
            <OwlCarousel className="owl-theme c-company--carousel" loop margin={10} nav={false} items={1} center={true} dots={true} autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true}>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som1.jpg" alt="qui-som"/>
                </div>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som2.jpg" alt="qui-som"/>
                </div>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som3.jpg" alt="qui-som"/>
                </div>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som4.jpg" alt="qui-som"/>
                </div>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som5.jpg" alt="qui-som"/>
                </div>
                <div className="item">
                    <img src="/imgs/qui_som/qui_som6.jpg" alt="qui-som"/>
                </div>
            </OwlCarousel>
            <div className="c-company--card">
                <div className="c-company--card--left">
                    <img className='c-company--card--img' src='/imgs/qui_som/el_meu_pare_i_jo.jpg' alt="tradefill-team"/>
                    <div className="c-company--card--photo">
                        <span>{t("company-col.foto")}</span>
                    </div>
                </div>
                <div className="c-company--card--right">
                    <h4>{t("company-col.subtitle2")}</h4>
                    <p>{t("company-col.p4")}</p>
                    <p>{t("company-col.p5")}</p>
                    <p>{t("company-col.p6")}</p>
                    <p className="c-company--card--end">{t("company-col.p7")}</p>
                    <p className="c-company--card--firm">{t("company-col.firm")}</p>
                </div>
            </div>
            <button className="c-company--portfolio">{t("company-col.portfolio")}</button>
        </div>
    );
}