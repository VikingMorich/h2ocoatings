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
            <div className="c-company--top">
                <div className="c-company--left-top">
                    <div className="c-company--filo">
                        <span>{t("company-col.subtitle").toUpperCase()}</span>
                    </div>
                    <div className="c-company--border" />
                    <p>{t("company-col.p1")}</p>
                    <p>{t("company-col.p2")}</p>
                    <p>{t("company-col.p3")}</p>
                </div>
                <div className="c-company--right-top">
                    <img className='c-company--img' src='/imgs/qui_som/foto_equip.jpg' alt="teamwork"/>
                </div>
            </div>
            <div className="c-company--carousels">
                <div className="c-company--carousel-box c-company--carousel-box--left">
                    <OwlCarousel className="owl-theme c-company--carousel c-company--carousel-left" loop margin={10} nav={false} items={1} center={true} autoplay={true} autoplayTimeout={4000} dots={false} autoplayHoverPause={true}>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som1.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som2.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som3.jpg" alt="qui-som"/>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="c-company--carousel-box">
                    <OwlCarousel className="owl-theme c-company--carousel c-company--carousel-right" loop margin={10} nav={false} items={1} center={true} autoplay={true} autoplayTimeout={4000} dots={false} autoplayHoverPause={true}>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som5.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som4.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som6.jpg" alt="qui-som"/>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="c-company--carousel-box--mobile">
                    <OwlCarousel className="owl-theme c-company--carousel" loop margin={10} nav={false} items={1} center={true} autoplay={true} autoplayTimeout={4000} dots={false} autoplayHoverPause={true}>
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
                            <img src="/imgs/qui_som/qui_som5.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som4.jpg" alt="qui-som"/>
                        </div>
                        <div className="item">
                            <img src="/imgs/qui_som/qui_som6.jpg" alt="qui-som"/>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="c-company--card">
                <div className="c-company--card--left">
                    <img className='c-company--card--img' src='/imgs/qui_som/el_meu_pare_i_jo.jpg' alt="tradefill-team"/>
                </div>
                <div className="c-company--card--right">
                    <h4>{t("company-col.subtitle2").toUpperCase()}</h4>
                    <div className="c-company--border" />
                    <p>{t("company-col.p4")}</p>
                    <p>{t("company-col.p5")}</p>
                    <p>{t("company-col.p6")}</p>
                    <p className="c-company--card--end">{t("company-col.p7")}</p>
                    <p className="c-company--card--firm">{t("company-col.firm")}</p>
                </div>
            </div>
            <a href={`/pdfs/PROFILE_H2O_2022.pdf`} target="_blank" rel="noreferrer" className="c-company--profile">
                {t("company-col.portfolio")}
            </a>
        </div>
    );
}