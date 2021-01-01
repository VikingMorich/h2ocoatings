import React, {useEffect} from 'react';
import { useTranslation } from "react-i18next"

export default function Showrooms() {
    const [t] = useTranslation("global")
    useEffect(() => {
        document.title = 'H2O Coatings - ' + t("services")
        window.scrollTo(0, 0)
    }, [t]);

    return (
        <div className="c-showrooms">
            <h1>{t("showrooms").toUpperCase()}</h1>
            <div className="c-showrooms--content">
                <div className="c-showrooms--left">
                    <div className="c-showrooms--text">
                        <p>{t("showrooms-col.p1")}</p>
                        <p>{t("showrooms-col.p2")}</p>
                        <p>{t("showrooms-col.p3")}</p>
                        <p>
                            {t("showrooms-col.info")}
                            <a href={`mailto:${t('email')}`}>{t("email")}</a>
                        </p>
                    </div>
                    <img src="/imgs/exposicions/EXPOSITOR WEB.jpg" className="c-showrooms--expositor" alt="expositor tradetherm"/>
                </div>
                <div className="c-showrooms--right">
                    <img src="/imgs/exposicions/1 - INFINITYT.jpg" className="c-showrooms--img" alt="infinity panel"/>
                    <img src="/imgs/exposicions/2 - INFINITYPREMIUM.jpg" className="c-showrooms--img" alt="infinity premium panel"/>
                    <img src="/imgs/exposicions/3 - INFINITYSUPREME.jpg" className="c-showrooms--img" alt="infinity supreme panel"/>
                </div>
            </div>
        </div>
    );
}