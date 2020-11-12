import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Company() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("company")
        window.scrollTo(0, 0)
    }, [t]);
      
    return (
        <div className="c-company">
            <h1>{t("company-col.title")}</h1>
            <img className='c-company--img' src='/imgs/example-foto1.jpg' alt="teamwork"/>
            <h4>{t("company-col.subtitle")}</h4>
            <p>{t("company-col.p1")}</p>
            <p>{t("company-col.p2")}</p>
            <p>{t("company-col.p3")}</p>
            <div className="c-company--card">
                <div className="c-company--card--left">
                    <img className='c-company--card--img' src='/imgs/example-foto2.jpeg' alt="tradefill-team"/>
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