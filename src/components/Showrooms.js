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
            <p>{t("showrooms-col.p1")}</p>
            <p>{t("showrooms-col.p2")}</p>
            <p>{t("showrooms-col.p3")}</p>
            <img src="/Work-In-Progress-Concept.jpg" className="c-showrooms--wip" alt="work in progress"/>
            <p>{t("showrooms-col.p4")}</p>
            <p>
                {t("showrooms-col.info")}
                <a href={`mailto:${t('email')}`}>{t("email")}</a>
            </p>
        </div>
    );
}